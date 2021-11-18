import './App.css'
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import AddGenre from './AddGenre'
import EditGenre from './EditGenre'

// Propsina tulee admin tieto app komponentilta
const GenretList = ({admin}) => {

    // Komponentin tila eli state
    const [genret, setGenret] = useState([]) // Alustus tyhjä taulukko
    const [haeDatat, setHaeDatat] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [muokattavaGenre, setMuokattavaGenre] = useState({}) // Alustus tyhjä olio
    const [pelit, setPelit] = useState([]) // Tähän talletetaan vastaus kun on haetu pelit genren mukaan

    // UseEffect hook jolla on kätevä hakea datat backendistä
    useEffect(() => {
        fetch("https://localhost:5001/api/genret")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setGenret(data)) // Asetetaan data genret nimiseen stateen
    }, [haeDatat, showAddForm, showEditForm])

    
    // Muokkausnapin / kynäkuvan tapahtumankäsittelijä. g = genre mikä lähetetään parametrina kynäkuvakkeelta
    const muokkaa = (g) => {
        setMuokattavaGenre(g)
        setShowEditForm(true)
    }


     // Poistonapin tapahtumankäsittelijä
     const poistaGenre = (genre) => {
        const result = window.confirm("Haluatko poistaa genren: " + genre.nimi)
        if (result === false) {
            return // jos ei haluta poistaa, niin hypätään pois funktiosta.
        }
        else {
            sendToBackend(genre.genreId)
            .then(response => alert(response.data))

            setTimeout(() => {
                setHaeDatat(!haeDatat)
            }, 2500)
            
        }
    }

    // Axios metodi joka lähettää poistopyynnön back-endiin
    const sendToBackend = (id) => {
        return Axios.delete('https://localhost:5001/api/genret/' + id)
    }

    // Funktio joka hakee pelit genreId:n mukaan
    const haePelit = (g) => {
        fetch("https://localhost:5001/api/pelit/genreid/" + g.genreId)
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setPelit(data))
        let otsikko = "Genre: " + g.nimi
        let lista = "Genren pelit: \n"
        pelit.map(p => (
            lista += p.nimi + '\n'
           
        ))
        let tuloste = otsikko + "\n\r" + lista
        alert(tuloste)
    }


    return(
        <div className="App">
            <h2>Genret</h2>

            {showAddForm && <AddGenre setShowAddForm={setShowAddForm} />}

            {showEditForm && <EditGenre setShowEditForm={setShowEditForm} genre={muokattavaGenre} />}

            {!showAddForm && <button onClick={() => setShowAddForm(!showAddForm)} className="pelinLisäysNappi" >Lisää uusi genre</button>}
            <br />

            <table className="genreTaulukko">
                <thead>
                    <tr>
                        <th>Genre ID</th>
                        <th>Nimi</th>
                        <th>Kuvaus</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {genret && genret.map(g => (
                        <tr>
                            <td>{g.genreId}</td>
                            <td>{g.nimi}</td>
                            <td>{g.kuvaus}</td>

                            {admin && <td><i onClick={() => muokkaa(g)} className="fas fa-pencil-alt"></i></td>}
                           {admin && <td><i onClick={() => poistaGenre(g)} className="far fa-trash-alt"></i></td>}
                            <td><i onClick={() => haePelit(g)} class="fas fa-gamepad"></i></td>
                        </tr>

                        )  
                      )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default GenretList
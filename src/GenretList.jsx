import './App.css'
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import AddGenre from './AddGenre'

const GenretList = () => {

    // Komponentin tila eli state
    const [genret, setGenret] = useState([])
    const [haeDatat, setHaeDatat] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)

    // UseEffect hook jolla on kätevä hakea datat backendistä
    useEffect(() => {
        fetch("https://localhost:5001/api/genret")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setGenret(data)) // Asetetaan data genret nimiseen stateen
    }, [haeDatat, showAddForm])


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
            }, 500)
            
        }
    }

    // Axios metodi joka lähettää poistopyynnön back-endiin
    const sendToBackend = (id) => {
        return Axios.delete('https://localhost:5001/api/genret/' + id)
    }


    return(
        <div className="App">
            <h2>Genret</h2>

            {showAddForm && <AddGenre setShowAddForm={setShowAddForm} />}

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
                    </tr>
                </thead>
                <tbody>
                    {genret && genret.map(g => (
                        <tr>
                            <td>{g.genreId}</td>
                            <td>{g.nimi}</td>
                            <td>{g.kuvaus}</td>
                            <td><button>muokkaa</button></td>
                            <td><button onClick={() => poistaGenre(g)}>poista</button></td>
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
import './App.css'
import React, {useState} from 'react'
import Axios from 'axios'

const EditPeli = (props) => {

    // Propsina vastaanotetaan yksi peli olio. Sen lähettää PelitList komponentti.
    // Myöskin setShowEditForm jolla piilotetaan edit lomake kun muokkaus on valmis.

    const [nimi, setNimi] = useState(props.peli.nimi)
    const [genreId, setGenreId] = useState(props.peli.genreId)
    const [julkaisuvuosi, setJulkaisuvuosi] = useState(props.peli.julkaisuvuosi)
    const [lataukset, setLataukset] = useState(props.peli.lataukset)

    const resetoi = () => {
        setNimi(props.peli.nimi)
        setGenreId(props.peli.genreId)
        setJulkaisuvuosi(props.peli.julkaisuvuosi)
        setLataukset(props.peli.lataukset)
    }


    // Funktio joka ajetaan kun formi submitoidaan
    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedPeli = {
            nimi: nimi,
            genreId: parseInt(genreId),
            julkaisuvuosi: parseInt(julkaisuvuosi),
            lataukset: parseInt(lataukset)
        }

        const id = props.peli.peliId
        
        // Kutsutaan funktiota, joka tekee http pyynnön
        sendToBackend(id, updatedPeli)
        .then(response => {
            if (response.status === 200) {
            alert(response.data)
            // Muokkauslomake piilotetaan propsina saadulla funktiolla joka muuttaa GenretList.jsx:ssä
            // määritettyä statea: showEditForm
            props.setShowEditForm(false)
        }})

    }

    // Tämä funktio tekee pelkän http pyyntö osuuden
    const sendToBackend = (id, olio) => {
      return Axios.put('https://localhost:5001/api/pelit/' + id, olio)
        //return Axios.put(`https://localhost:5001/api/pelit/${id}`, olio)

    }
   
    return (
        <div className="App">
            <h2>Pelin muokkaaminen</h2>

            <form onSubmit={handleSubmit} style={{width: '13%', margin: 'auto'}}>

                <p>Peli ID: {props.peli.peliId}</p>
                <input type="text" value={nimi} onChange={({target}) => setNimi(target.value)} placeholder="Pelin nimi" />
                <input type="number" value={genreId} onChange={({target}) => setGenreId(target.value)} />
                <input type="number" value={lataukset} onChange={({target}) => setLataukset(target.value)} />
                <input type="number" value={julkaisuvuosi} onChange={({target}) => setJulkaisuvuosi(target.value)} />

                <input type="submit" value="Tallenna" />
                <input type="button" value="Resetoi" onClick={() => resetoi()} />
                <input type="button" value="Takaisin" onClick={() => props.setShowEditForm(false)} />
                
            </form>

        </div>
        )

    }

export default EditPeli
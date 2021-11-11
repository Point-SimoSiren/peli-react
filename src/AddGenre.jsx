import './App.css'
import React, {useState} from 'react'
import Axios from 'axios'

const AddGenre = (props) => {

    const [nimi, setNimi] = useState('')
    const [kuvaus, setKuvaus] = useState('')

    const tyhjennä = () => {
        setNimi('')
        setKuvaus('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newGenre = {
            nimi: nimi,
            kuvaus: kuvaus
        }
        
        // Kutsutaan funktiota, joka tekee http pyynnön
        sendToBackend(newGenre)
        .then(response => {
            if (response.status === 200) {
            alert(response.data)
            // Lisäyslomake piilotetaan propsina saadulla funktiolla joka muuttaa GenretList.jsx:ssä
            // määritettyä statea: showAddForm
            props.setShowAddForm(false)
        }})

    }

    // Tämä funktio tekee pelkän http pyyntö osuuden
    const sendToBackend = (uusiGenre) => {
        return Axios.post('https://localhost:5001/api/genret', uusiGenre)
    }
   
    return (
        <div className="App">
            <h2>Genren lisääminen</h2>

            <form onSubmit={handleSubmit} style={{width: '13%', margin: 'auto'}}>

                <input type="text" value={nimi} onChange={({target}) => setNimi(target.value)} placeholder="Genren nimi" />
                <input type="text" value={kuvaus} onChange={({target}) => setKuvaus(target.value)} placeholder="Genren kuvaus" />
            
                <input type="submit" value="Tallenna" />
                <input type="button" value="Tyhjennä" onClick={() => tyhjennä()} />
                <input type="button" value="Takaisin" onClick={() => props.setShowAddForm(false)} />
                
            </form>

        </div>
        )

    }

export default AddGenre
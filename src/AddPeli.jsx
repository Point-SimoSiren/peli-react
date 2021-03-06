import './App.css'
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const AddPeli = (props) => {

    const [name, setName] = useState('')
    const [genreId, setGenreId] = useState('')
    const [julkaisuvuosi, setJulkaisuvuosi] = useState('')
    const [lataukset, setLataukset] = useState('')
    const [genret, setGenret] = useState([]) // genret tänne dropdownia varten

    // Haetaan genret
    useEffect(() => {
       fetch('https://localhost:5001/api/genret')
       .then(res => res.json()) // json muodosta javascriptiksi
       .then(oliot => setGenret(oliot)) // asetetaan stateen
    }, [])

    const tyhjennä = () => {
        setName('')
        setGenreId('')
        setJulkaisuvuosi('')
        setLataukset('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newGame = {
            nimi: name,
            genreId: parseInt(genreId),
            julkaisuvuosi: parseInt(julkaisuvuosi),
            lataukset: parseInt(lataukset)
        }
        
        // Kutsutaan funktiota, joka tekee http pyynnön
        sendToBackend(newGame)
        .then(response => {
            if (response.status === 200) {
            alert(response.data)
            // Lisäyslomake piilotetaan propsina saadulla funktiolla joka muuttaa PelitList.jsx:ssä
            // määritettyä statea: showAddForm
            props.setShowAddForm(false)
        }})

    }

    // Tämä funktio tekee pelkän http pyyntö osuuden
    const sendToBackend = (uusiPeli) => {
        return Axios.post('https://localhost:5001/api/pelit', uusiPeli)
    }
   
    return (
        <div className="App">
            <h2>Pelin lisääminen</h2>

            <form onSubmit={handleSubmit} style={{width: '13%', margin: 'auto'}}>

                <input type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Pelin nimi" />

                    <select className="dropdown"
                        value={genreId} 
                        onChange={({target}) => setGenreId(target.value)}>
                        {genret && genret.map(g => {
                            return(
                             <option value={g.genreId}>{g.nimi}</option>
                        )})}
                    </select>
              
                <input type="text" value={julkaisuvuosi} onChange={({target}) => setJulkaisuvuosi(target.value)} placeholder="Julkaisuvuosi" />
                <input type="text" value={lataukset} onChange={({target}) => setLataukset(target.value)} placeholder="lataukset" />
               
                <input type="submit" value="Tallenna" />
                <input type="button" value="Tyhjennä" onClick={() => tyhjennä()} />
                <input type="button" value="Takaisin" onClick={() => props.setShowAddForm(false)} />
                
            </form>

        </div>
        )

    }

export default AddPeli
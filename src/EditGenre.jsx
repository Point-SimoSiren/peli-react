import './App.css'
import React, {useState} from 'react'
import Axios from 'axios'

const EditGenre = (props) => {

    // Propsina vastaanotetaan yksi genre olio. Sen lähettää GenretList komponentti.
    // Myöskin setShowEditForm jolla piilotetaan edit lomake kun muokkaus on valmis.

    const [nimi, setNimi] = useState(props.genre.nimi)
    const [kuvaus, setKuvaus] = useState(props.genre.kuvaus !== undefined ? props.genre.kuvaus : "")

    const tyhjennä = () => {
        setNimi('')
        setKuvaus('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedGenre = {
            nimi: nimi,
            kuvaus: kuvaus
        }

        const id = props.genre.genreId
        
        // Kutsutaan funktiota, joka tekee http pyynnön
        sendToBackend(id, updatedGenre)
        .then(response => {
            if (response.status === 200) {
            alert(response.data)
            // Muokkauslomake piilotetaan propsina saadulla funktiolla joka muuttaa GenretList.jsx:ssä
            // määritettyä statea: showEditForm
            props.setShowEditForm(false)
        }})

    }

    // Tämä funktio tekee pelkän http pyyntö osuuden
    const sendToBackend = (id, muokattuGenre) => {
      return Axios.put('https://localhost:5001/api/genret/' + id, muokattuGenre)
        //return Axios.put(`https://localhost:5001/api/genret/${id}`, muokattuGenre)

    }
   
    return (
        <div className="App">
            <h2>Genren muokkaaminen</h2>

            <form onSubmit={handleSubmit} style={{width: '13%', margin: 'auto'}}>
                <p>{props.genre.genreId}</p>
                <input type="text" value={nimi} onChange={({target}) => setNimi(target.value)} placeholder="Genren nimi" />
                <input type="text" value={kuvaus} onChange={({target}) => setKuvaus(target.value)} placeholder="Genren kuvaus" />
            
                <input type="submit" value="Tallenna" />
                <input type="button" value="Tyhjennä" onClick={() => tyhjennä()} />
                <input type="button" value="Takaisin" onClick={() => props.setShowEditForm(false)} />
                
            </form>

        </div>
        )

    }

export default EditGenre
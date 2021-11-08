import './App.css'
import React, {useState} from 'react'

const AddPeli = (props) => {

    const [name, setName] = useState('')
    const [genreId, setGenreId] = useState('')
    const [julkaisuvuosi, setJulkaisuvuosi] = useState('')
    const [lataukset, setLataukset] = useState('')

    const tyhjennä = () => {
        setName('')
        setGenreId('')
        setJulkaisuvuosi('')
        setLataukset('')
    }
   
    return (
        <div className="App">
            <h2>Pelin lisääminen</h2>
            <form style={{width: '13%', margin: 'auto'}}>
                <input type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Pelin nimi" />
                <input type="text" value={genreId} onChange={({target}) => setGenreId(target.value)} placeholder="Genre id" />
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
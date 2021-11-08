import './App.css'
import React, {useState} from 'react'

const AddPeli = () => {

   
    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Pelin nimi" />
                <input type="number" placeholder="Genre id" />
                <input type="number" placeholder="Julkaisuvuosi" />
                <input type="number" placeholder="Lataukset" />
                <input type="submit" value="Tallenna" />
                <input type="cancel" value="Peruuta" />
            </form>

        </div>
        )

    }

export default AddPeli
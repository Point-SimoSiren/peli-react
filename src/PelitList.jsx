import './App.css'
import React, {useState, useEffect} from 'react'
import Peli from './Peli'
import AddPeli from './AddPeli'

const PelitList = () => {

    // Komponentin tila
    const [pelit, setPelit] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)

    // useEffect hookilla voidaan vaikka hakea datat alussa
    useEffect(() => {
        fetch("https://localhost:5001/api/pelit")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setPelit(data)) // Asetetaan data peli nimiseen stateen
    }, [])

    return (
        <div className="App">
            <h1>Pelit</h1>

            {showAddForm && <AddPeli />}

            <button onClick={() => setShowAddForm(!showAddForm)} className="pelinLisäysNappi" >Lisää uusi peli</button>

            {pelit && pelit.map(p => (
               <Peli peli={p}/>
            ))}
            
            {!pelit && <h4>Ldataan...</h4>}
        </div>
        )

    }

export default PelitList

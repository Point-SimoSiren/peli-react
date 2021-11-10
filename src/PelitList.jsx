import './App.css'
import React, {useState, useEffect} from 'react'
import Peli from './Peli'
import AddPeli from './AddPeli'

const PelitList = () => {

    // Komponentin tila
    const [pelit, setPelit] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
    const [haeDatat, setHaeDatat] = useState(false)
    const [haku, setHaku] = useState('')

    // useEffect hookilla voidaan vaikka hakea datat alussa
    useEffect(() => {
        fetch("https://localhost:5001/api/pelit")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setPelit(data)) // Asetetaan data peli nimiseen stateen
    }, [showAddForm, haeDatat])

    return (
        <div className="App">
            <h1>Pelit</h1>
            
            {showAddForm && <AddPeli setShowAddForm={setShowAddForm} />}

            {!showAddForm && <button onClick={() => setShowAddForm(!showAddForm)} className="pelinLisäysNappi" >Lisää uusi peli</button>}
            <br />
            <input className="hakuKenttä" type="text"
            value={haku} onChange={({target}) => setHaku(target.value)} placeholder="Hae pelin nimellä" />

            {pelit && pelit.map(p => {
                const lowerCaseName = p.nimi.toLowerCase()
                if (lowerCaseName.indexOf(haku.toLowerCase()) > -1) {
                    return (
               <Peli peli={p} setHaeDatat={setHaeDatat} haeDatat={haeDatat} />
            
                    )}
                    }
                ) 
            }
            
            {!pelit && <h4>Ldataan...</h4>}
        </div>
        )

    }

export default PelitList

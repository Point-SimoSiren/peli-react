import './App.css'
import React, {useState, useEffect} from 'react'
import Peli from './Peli'
import AddPeli from './AddPeli'
import EditPeli from './EditPeli'

// Jos propsi otetaan vastaan nimellä aaltosuluissa, siihen ei tarvitse enää viitata sanalla props
// vaan pelkkä admin riittää
const PelitList = ({admin}) => {

    // Komponentin tila
    const [pelit, setPelit] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
    const [haeDatat, setHaeDatat] = useState(false)
    const [haku, setHaku] = useState('')
    const [showEditForm, setShowEditForm] = useState(false)
    const [muokattavaPeli, setMuokattavaPeli] = useState({}) // Alustus tyhjä olio

    // useEffect hookilla voidaan vaikka hakea datat alussa
    useEffect(() => {
        fetch("https://localhost:5001/api/pelit")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setPelit(data)) // Asetetaan data peli nimiseen stateen
    }, [showAddForm, haeDatat, showEditForm])


      // Muokkausnapin / kynäkuvan tapahtumankäsittelijä. p = peli mikä lähetetään parametrina kynäkuvakkeelta
      const muokkaa = (p) => {
        setMuokattavaPeli(p)
        setShowEditForm(true) // Muokkausikkuna tuodaan näkyviin tällä tilamuutoksella
    }


    return (
        <div className="App">
            <h2>Pelit</h2>
            
            {showAddForm && admin && <AddPeli setShowAddForm={setShowAddForm} />}

            {!showAddForm && admin && <button onClick={() => setShowAddForm(!showAddForm)} className="pelinLisäysNappi" >Lisää uusi peli</button>}
            <br />

            {showEditForm && admin && <EditPeli setShowEditForm={setShowEditForm} peli={muokattavaPeli} />}
            
            <input className="hakuKenttä" type="text"
            value={haku} onChange={({target}) => setHaku(target.value)} placeholder="Hae pelin nimellä" />

            {pelit && pelit.map(p => {
                const lowerCaseName = p.nimi.toLowerCase()
                if (lowerCaseName.indexOf(haku.toLowerCase()) > -1) {
                    return (
               <Peli peli={p} muokkaa={muokkaa} admin={admin} setHaeDatat={setHaeDatat} haeDatat={haeDatat} />
            
                    )}
                    }
                ) 
            }
            
            {!pelit && <h4>Ldataan...</h4>}
        </div>
        )

    }

export default PelitList

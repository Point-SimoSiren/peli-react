import './App.css'
import React, {useState} from 'react'
import Axios from 'axios'

// PelitList.jsx tulostaa tämän komponentin jokaiselle pelille ja lähettää propsina aina kyseisen pelin tiedot
const Peli = (props) => {

    // Komponentin tila joka määrää näytetäänkö pelkkä nimi vai muutkin tiedot.
    const [näytetäänkö, setNäytetäänkö] = useState(false)

    // Poistonapin tapahtumankäsittelijä
    const poistaPeli = (peli) => {
        const result = window.confirm("Haluatko poistaa pelin: " + peli.nimi)
        if (result === false) {
            return // jos ei haluta poistaa, niin hypätään pois funktiosta.
        }
        else {
            sendToBackend(peli.peliId)
            .then(response => alert(response.data))

            setTimeout(() => {
                props.setHaeDatat(!props.haeDatat)
            }, 500)
            
        }
    }

    // Axios metodi joka lähettää poistopyynnön back-endiin
    const sendToBackend = (id) => {
        let token = "Rtayi23tyP987ghX1"
        return Axios.delete('https://localhost:5001/api/pelit/' + id + '/' + token)
    }



    return (
        <div className="App">

            {/* <h4 onMouseEnter={() => setNäytetäänkö(!näytetäänkö)} onMouseLeave={() => setNäytetäänkö(!näytetäänkö)}>{props.peli.nimi}</h4>
            */ }

            <h4 onClick={() => setNäytetäänkö(!näytetäänkö)}>{props.peli.nimi}</h4>

           {näytetäänkö &&
           <div className="Pelitiedot" onClick={() => setNäytetäänkö(!näytetäänkö)}>

               <h5 style={{color: 'white'}}>{props.peli.nimi}</h5>
                <table>
                    <thead>
                        <tr>
                            <th>Genre ID</th>
                            <th>Julkaisuvuosi</th>
                            <th>Lataukset</th>
                            <th><i onClick={() => alert("muokkkaus")} className="fas fa-pencil-alt"></i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.peli.genreId}</td>
                            <td>{props.peli.julkaisuvuosi}</td>
                            <td>{props.peli.lataukset}</td>

                            <td><i onClick={() => poistaPeli(props.peli)} className="fas fa-trash-alt"></i></td>
                            <td></td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
                }
        </div>
      
        )

    }

export default Peli
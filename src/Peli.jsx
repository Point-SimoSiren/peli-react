import './App.css'
import React, {useState} from 'react'

// PelitList.jsx tulostaa tämän komponentin jokaiselle pelille ja lähettää propsina aina kyseisen pelin tiedot
const Peli = (props) => {

    // Komponentin tila joka määrää näytetäänkö pelkkä nimi vai muutkin tiedot
    const [näytetäänkö, setNäytetäänkö] = useState(false)

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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.peli.genreId}</td>
                            <td>{props.peli.julkaisuvuosi}</td>
                            <td>{props.peli.lataukset}</td>
                            <td><button>poista</button></td>
                            <td><button>muokkaa</button></td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
                }
        </div>
      
        )

    }

export default Peli
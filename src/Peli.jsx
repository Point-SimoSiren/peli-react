import './App.css'
import React, {useState} from 'react'

const Peli = (props) => {

    // Komponentin tila joka määrää näytetäänkö pelkkä nimi vai muutkin tiedot
    const [näytetäänkö, setNäytetäänkö] = useState(true)


    return (
        <div className="App">
            <h4>{props.peli.nimi}</h4>
           {näytetäänkö &&
           <div className="pelitiedot">
                <table>
                    <thead>
                        <tr>
                            <th>Genre ID</th>
                            <th>Julkaisuvuosi</th>
                            <th>Lataukset</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.peli.genreId}</td>
                            <td>{props.peli.julkaisuvuosi}</td>
                            <td>{props.peli.lataukset}</td>
                        </tr>
                    </tbody>
               
                </table>
                </div>
                }
        </div>
      
        )

    }

export default Peli
import './App.css'
import React, {useState, useEffect} from 'react'

const GenretList = () => {

    // Komponentin tila eli state
    const [genret, setGenret] = useState([])

    // UseEffect hook jolla on kätevä hakea datat backendistä
    useEffect(() => {
        fetch("https://localhost:5001/api/genret")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => setGenret(data)) // Asetetaan data genret nimiseen stateen
    }, [])

    return(
        <div className="App">
            <h2>Genret</h2>

            <table className="genreTaulukko">
                <thead>
                    <tr>
                        <th>Genre ID</th>
                        <th>Nimi</th>
                        <th>Kuvaus</th>
                    </tr>
                </thead>
                <tbody>
                    {genret && genret.map(g => (
                        <tr>
                            <td>{g.genreId}</td>
                            <td>{g.nimi}</td>
                            <td>{g.kuvaus}</td>
                        </tr>
                    )  
                    )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default GenretList
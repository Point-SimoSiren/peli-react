import './App.css'
import React, {useState, useEffect} from 'react'

const PelitList = () => {

    // Komponentin tila
    const [pelit, setPelit] = useState([])

    // useEffect hookilla voidaan vaikka hakea datat alussa
    useEffect(() => {
        fetch("https://localhost:5001/api/pelit")
        .then(res => res.json()) // muutetaan json data javascriptiksi
        .then(data => console.log(data))
    }, [])

    return (
        <div className="App">

            <h1>Pelit</h1>
            
        </div>
    )
}

export default PelitList

import './App.css'
import React, {useState} from 'react'

const Laskuri = () => {

const [luku, setLuku] = useState(0) // Komponentin tila nimeltään luku. Alustettu nollaksi.

  return (
    <div className="Pelitiedot">
        <p>Tämä on laskuri</p>
        
        <button onClick={() => setLuku(luku + 1)}>plus</button>
        <button onClick={() => setLuku(luku - 1)}>miinus</button>
        <h3>{luku}</h3>
        {luku === 3 && <h3>Luku on nyt kolme</h3>}
        {luku === 2 ? <h3>Luku on nyt kaksi</h3> : null}
    </div>
  )
}

export default Laskuri

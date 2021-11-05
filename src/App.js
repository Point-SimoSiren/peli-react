import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'
import PelitList from './PelitList'

function App() {

  // Komponentin tila joka ohjaa näytetäänkö laskuria
  const [showLaskuri, setShowLaskuri] = useState(false)

  let tervehdys = "Tervehdys laskuri!"

  function ilmoitus() {
    alert("nappia painettu!")
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        {!showLaskuri && <h4 onClick={() => setShowLaskuri(true)}>Näytä laskuri</h4>}
        {showLaskuri && <h4 onClick={() => setShowLaskuri(false)}>Piilota laskuri</h4>}

        {showLaskuri && <Laskuri viesti={tervehdys} ilmoitus={ilmoitus} />}

        <PelitList />

    </div>
  )
}

export default App


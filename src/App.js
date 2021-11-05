import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'

function App() {

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

    </div>
  )
}

export default App


import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'

function App() {

  let tervehdys = "Tervehdys laskuri!"

  function ilmoitus() {
    alert("nappia painettu!")
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      
       <h2>Hello!</h2>

        <Laskuri viesti={tervehdys} ilmoitus={ilmoitus} />
    </div>
  )
}

export default App


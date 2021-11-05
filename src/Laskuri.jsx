import './App.css'

function Laskuri(props) {

  return (
    <div className="App">
        <p>Tämä on laskuri</p>
        <p>{props.viesti}</p>
        <button onClick={() => props.ilmoitus()}>Ilmoitus nappi</button>
    </div>
  )
}

export default Laskuri

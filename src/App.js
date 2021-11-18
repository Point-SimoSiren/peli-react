import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import React, {useState, useEffect} from 'react'
import PelitList from './PelitList'
import GenretList from './GenretList'
import About from './About'

// React router navigointiin
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Bootstrap navipalkkia varten
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [admin, setAdmin] = useState(false)

  // Tarkistetaan alussa onko selaimeen localstorageen talletettu kirjautumistieto
  useEffect(() => {
    let kirjautunut = localStorage.getItem("kirjautunut")
    if (kirjautunut === "true") {
      setLoggedIn(true)
    }
    let admin = localStorage.getItem("admin")
    if (admin === "true") {
      setAdmin(true)
    }
  }, [])

  // Tämä ajetaan kun pinkoodikenttän sisältö muuttuu
  const vertaile = (input) => {
  if (input === "12345") // Peruskäyttäjän pinkoodi
    {
      localStorage.setItem("kirjautunut", true)
      localStorage.setItem("admin", false)
      setLoggedIn(true)
    }
    if (input === "09876") // Admin pinkoodi
    {
      localStorage.setItem("kirjautunut", true)
      localStorage.setItem("admin", true)
      setLoggedIn(true)
      setAdmin(true)
    }
  }

  // Logout linkin tapahtmankäsittelijä funktio
  const logout = () => {
    const result = window.confirm("Vahvista uloskirjautuminen")
    if (result === true) {
    localStorage.clear()
    window.location.reload()
    }
  }

  // JavaScript media query
  let ruudunLeveys = window.matchMedia("(max-width: 500px)")


  return (
    <>
      {loggedIn === false && <div className="App">
      
        <input type="password" onChange={({target}) => vertaile(target.value)} placeholder="syötä pinkoodi" />
        </div>
      }
      

      {loggedIn === true &&
        <div className="App">

         {ruudunLeveys.matches && <button id="logoutNappi" onClick={logout}>Kirjaudu ulos</button>}

        <img src={logo} className="App-logo" alt="logo" />
       
          <h1>Pelisovellus</h1>
          {admin && <h5>Huom! Olet kirjatutunut sisään administraattorina</h5>}
          
        <Router>
          <Navbar bg="dark" variant="dark">
            <Link to={'/'} id="etusivuLinkki" className='nav-link'>Etusivu</Link>
            <Nav className="mr-auto">

              <Link to={'/Pelit'} className='nav-link'>Pelit</Link>
              <Link to={'/Genret'} className='nav-link'>Genret</Link>
              <Link to={'/Laskuri'} className='nav-link'>Laskuri</Link>
              <Link to={'/Tietoja'} className='nav-link'>Tietoja</Link>
              { !ruudunLeveys.matches && <a className='nav-link' onClick={logout}>Kirjaudu ulos</a>}
            </Nav>
          </Navbar>

          <Routes>
            <Route path='/Pelit' element={<PelitList admin={admin} />} />
            <Route path='/Genret' element={<GenretList admin={admin} />} />
            <Route path='/Laskuri' element={<Laskuri />} />
            <Route path='/Tietoja' element={<About />} />
          </Routes>
        </Router>
    </div>
      }
    </>
   )
  }

export default App


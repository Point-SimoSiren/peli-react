import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'
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

  
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pelisovellus</h1>
        
        <Router>
          <Navbar bg="dark" variant="dark">
            <Link to={'/'} id="etusivuLinkki" className='nav-link'>Etusivu</Link>
            <Nav className="mr-auto">

              <Link to={'/Pelit'} className='nav-link'>Pelit</Link>
              <Link to={'/Genret'} className='nav-link'>Genret</Link>
              <Link to={'/Laskuri'} className='nav-link'>Laskuri</Link>
              <Link to={'/Tietoja'} className='nav-link'>Tietoja</Link>
            </Nav>
          </Navbar>

          <Routes>
            <Route path='/Pelit' element={<PelitList />} />
            <Route path='/Genret' element={<GenretList />} />
            <Route path='/Laskuri' element={<Laskuri />} />
            <Route path='/Tietoja' element={<About />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App


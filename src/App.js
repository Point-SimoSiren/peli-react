import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'
import PelitList from './PelitList'
import GenretList from './GenretList'
// React router navigointiin
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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



        </Router>


         <Laskuri viesti={tervehdys} ilmoitus={ilmoitus} />

        <GenretList />

        <PelitList />
        
    </div>
  )
}

export default App


// Tämä komponentti on luokkakomponentti (vanha tyyli)

import React, {Component} from 'react'
import './App.css'

class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
                showImage: false,
                kuukaudenPelaaja: "Maikki1997"
        }
    }
    

    // Render metodi on ainoa pakollinen life-cycle metodi
    render() {

        return(
            <div className="App">
            <h2>Tietoja</h2>
            <p>Olemme Suomen 44. suurin pelialan foorumi</p>

            {showImage && <img src="" />}


            </div>
          )
        }

}

export default About
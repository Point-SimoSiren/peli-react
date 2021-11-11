// Tämä komponentti on luokkakomponentti (vanha tyyli)

import React, {Component} from 'react'
import './App.css'

class About extends Component {
    // Jos tarvitaan luokkakomponentille tila pitää olla konstruktori
    constructor(props) {
        super(props)
        this.state = {
                showImage: false,
                kuukaudenPelaaja: "Maikki1997"
        }
    }

    componentDidMount() {
        console.log("componentDidMount metodista")
    }
    
    // Render metodi on ainoa pakollinen life-cycle metodi
    render() {
        console.log("Render metodista")
        return(
            <div className="App">
            <h2>Tietoja</h2>
            <p>Olemme Suomen 44. suurin pelialan foorumi</p>

            {!this.state.showImage && <button onClick={() => this.setState({showImage: !this.state.showImage}) }>Katso kuvamme jos uskallat</button>}
            {this.state.showImage && <img src="https://dynamicmedia.livenationinternational.com/Media/n/k/b/ec9d0aa9-a080-47bf-966a-8f44d1dbd407.jpg?auto=webp&width=1507.2" />}

            </div>
          )
        }

}

export default About
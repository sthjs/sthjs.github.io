import React, { Component } from 'react';
import Form from './Form'
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    prizeDoor: '',
    selectedDoor: '',
    openedDoor: '',
    switched: '',
    won: '',
    iterations: '',
    tactics: '',
    victories: '',
    winRate: ''
  }

  sectionStyle = {
    backgroundColor: "lightblue",
    width: "80%",
    margin: "auto",
    padding: "20px",
    marginBottom: "20px"
  }

  startGame = () => {
    this.setState({selectedDoor: '',
                   openedDoor: '',
                   switched: '',
                   won: ''})
    if (Math.random() < 0.33) {
      this.setState({prizeDoor: 1})
    } else if (Math.random() < 0.66) {
      this.setState({prizeDoor: 2})
    } else {
      this.setState({prizeDoor: 3})
    }
  }

  pickOne = () => {
    if (this.state.prizeDoor === '' || this.state.selectedDoor !== '') {
      return
    }
    this.setState({selectedDoor: 1})
    if (this.state.prizeDoor === 1) {
      if (Math.random() < 0.5) {
        console.log("Prize 1 - picked 1 - opened 2")
        this.setState({openedDoor: 2})
      } else {
        console.log("Prize 1 - picked 1 - opened 3")
        this.setState({openedDoor: 3})
      }
    } else if (this.state.prizeDoor === 2) {
      console.log("Prize 2 - picked 1 - opened 3")
      this.setState({openedDoor: 3})
    } else {
      console.log("Prize 3 - picked 1 - opened 2")
      this.setState({openedDoor: 2})
    }
  }

  pickTwo = () => {
    if (this.state.prizeDoor === '' || this.state.selectedDoor !== '') {
      return
    }
    this.setState({selectedDoor: 2})
    if (this.state.prizeDoor === 1) {
      console.log("Prize 1 - picked 2 - opened 3")
      this.setState({openedDoor: 3})
    } else if (this.state.prizeDoor === 2) {
      if (Math.random() < 0.5) {
        console.log("Prize 2 - picked 2 - opened 1")
        this.setState({openedDoor: 1})
      } else {
        console.log("Prize 2 - picked 2 - opened 3")
        this.setState({openedDoor: 3})
      }
    } else {
      console.log("Prize 3 - picked 2 - opened 1")
      this.setState({openedDoor: 1})
    }
  }

  pickThree = () => {
    if (this.state.prizeDoor === '' || this.state.selectedDoor !== '') {
      return
    }
    this.setState({selectedDoor: 3})
    if (this.state.prizeDoor === 1) {
      console.log("Prize 1 - picked 3 - opened 2")
      this.setState({openedDoor: 2})
    } else if (this.state.prizeDoor === 2) {
      console.log("Prize 2 - picked 3 - opened 1")
      this.setState({openedDoor: 1})
    } else {
      if (Math.random() < 0.5) {
        console.log("Prize 3 - picked 3 - opened 1")
        this.setState({openedDoor: 1})
      } else {
        console.log("Prize 3 - picked 3 - opened 2")
        this.setState({openedDoor: 2})
      }
    }
  }

  pickStay = () => {
    if (this.state.prizeDoor === '' || this.state.selectedDoor === '') {
      return
    }
    this.setState({switched: false})
    if (this.state.prizeDoor === this.state.selectedDoor) {
      this.setState({won: true})
    } else {
      this.setState({won: false})
    }
  }

  pickSwitch = () => {
    if (this.state.prizeDoor === '' || this.state.selectedDoor === '') {
      return
    }
    this.setState({switched: true})
    if (this.state.prizeDoor === this.state.selectedDoor) {
      this.setState({won: false})
    } else {
      this.setState({won: true})
    }
    if (this.state.selectedDoor === 1) {
      if (this.state.openedDoor === 2) {
        this.setState({selectedDoor: 3})
      } else {
        this.setState({selectedDoor: 2})
      }
    } else if (this.state.selectedDoor === 2) {
      if (this.state.openedDoor === 1) {
        this.setState({selectedDoor: 3})
      } else {
        this.setState({selectedDoor: 1})
      }
    } else {
      if (this.state.openedDoor === 1) {
        this.setState({selectedDoor: 2})
      } else {
        this.setState({selectedDoor: 1})
      }
    }
  }

  handleSubmit = form => {
    this.setState({ iterations: form.iterations,
                    tactics: form.tactics })
  }

  simulate = () => {
    var won = 0
    for (var i = 0; i < this.state.iterations; i++) {
      if (this.state.tactics === 'pysy') {
        if (Math.random() < 0.33) {
          won++
        }
      }
      else {
        if (Math.random() < 0.66) {
          won++
        }
      }
    }
    this.setState({victories: won})
    if (this.state.iterations === 0) {
      this.setState({winRate: 0})
    }
    else {
      var rate = 100 * (won / this.state.iterations)
      this.setState({winRate: rate})
    }
  }

  reset = () => {
    this.setState({
      prizeDoor: '',
      selectedDoor: '',
      openedDoor: '',
      switched: '',
      won: '',
      iterations: '',
      tactics: '',
      victories: '',
      winRate: ''
    })
  }
  

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 style={{textAlign: "center"}}>Monty Hall</h1>
        </div>

        <p>
          Monty Hallin ongelma on tv-visajuontaja Monty Hallin mukaan nimetty matemaattinen pulma, jota 
          on käytetty esimerkiksi havainnollistamaan miten intuitiomme usein johtavat harhaan 
          todennäköisyyksien suhteen. Ongelman avulla voi myös havainnollistaa ehdollisen todennäköisyyden 
          käsitettä.
        </p>
        <p>
          Kuvitellaan peli, jossa pelaajan edessä on kolme ovea, joista yhden takana on voitto ja kahden
          takana ei voittoa. Pelaaja valitsee yhden ovista, ja kun valinta on lukittu, pelinjohtaja (joka 
          tietää, minkä oven takana voitto on) avaa toisen jäljellä olevista ovista. Pelinjohtaja avaa aina
          sellaisen oven, jonka takana ei ole voittoa. Pelaaja saa nyt valita, pitäytyykö hän alkuperäisessä
          valinnassaan vai vaihtaako hän toiseen jäljellä olevista ovista.
        </p>
        <p>
          Voit kokeilla pelata peliä alla olevassa sovelluksessa. (Demonstraation vuoksi sovellus näyttää
          pelin tilan - siis myös arpomalla saadun palkinto-oven.)
        </p>

        <div style={this.sectionStyle}>
          <h2>Vaihe 1: Aloita peli</h2>
          <Button variant="contained" color="primary" onClick={this.startGame}>Arvo palkinto-ovi</Button>
          <div>{"Pelin arpoma palkinto-ovi: " + this.state.prizeDoor}</div>
          <h2>Vaihe 2: Valitse ovi</h2>
          <p>Sen jälkeen peli avaa kahdesta jäljelle jääneestä sellaisen, jossa ei ole voittoa.</p>
          <tbody>
            <tr>
              <td><Button variant="contained" color="primary" id="1" onClick={this.pickOne}>1</Button></td>
              <td><Button variant="contained" color="primary" id="2" onClick={this.pickTwo}>2</Button></td>
              <td><Button variant="contained" color="primary" id="3" onClick={this.pickThree}>3</Button></td>
            </tr>
          </tbody>
          <div>{"Pelaajan valitsema ovi: " + this.state.selectedDoor}</div>
          <div>{"Pelin avaama ovi (jossa ei ole voittoa): " + this.state.openedDoor}</div>
          <h2>Vaihe 3: Vaihdatko valintaasi?</h2>
          <tbody>
            <tr>
              <td><Button variant="contained" color="primary" id="1" onClick={this.pickStay}>Älä vaihda</Button></td>
              <td><Button variant="contained" color="primary" id="2" onClick={this.pickSwitch}>Vaihda</Button></td>
            </tr>
          </tbody>
          <div>{"Pelaaja valitsi vaihdon: " + this.state.switched}</div>
          <h2>Lopputulos</h2>
          <div>{"Pelaaja voitti: " + this.state.won}</div>
        </div>

        <p>
          Kannattaako pysyä alkuperäisessä vai vaihtaa? Onko tällä valinnalla ensinkään väliä voittotodennäköisyyden
          kannalta? Ehkä monien yllätykseksi valinnalla on väliä - Vaihtaminen on nimittäin ehdottomasti kannattava
          valinta. Jos taktiikkana on pysyä järjestelmällisesti alkuperäisessä valinnassa, voiton todennäköisyys on 
          1/3. Jos taas järjestelmällisesti vaihtaa ovea, voiton todennäöisyys on 2/3.
        </p>
        <p>
          Miten tämä on mahdollista? Ja eikö valinta kahden tuntemattoman oven välillä pitäisi tuottaa 50 prosentin
          todennäköisyyden? Niin olisi, jos valinta olisi alun perinkin vain kahden tuntemattoman oven välillä. Nyt
          pelaajalla kuin kuitenkin enemmän tietoa tilanteesta. Hän tietää, että hänen todennäköisyytensä valita
          kolmesta tuntemattomasta oikea on 1/3. Hän myös tietää, että minkä tahansa oven hän valitseekin, pelinjohtaja
          avaa jäljelle jääneistä ovista sellaisen, jossa ei ole voittoa. Pelinjohtajan toiminta antaa pelaajalle siis
          lisää tietoa tilanteesta, koska se riippuu pelaajan valinnasta ja määräytyy pelinjohtajalla olevan tiedon
          perusteella.
        </p>
        <p>
          Jos pelaaja osui alun perin voiton kohdalle (1/3), pelinjohtaja voi valita kahden voitottoman oven välillä. 
          Tässä tapauksessa vaihtaminen johtaa tappioon. Jos taas pelaaja ei osunut voiton kohdalle (2/3), pelinjohtajalla 
          ei ole kuin yksi voitoton ovi avattavanaan. Näissä tapauksissa vaihtaminen johtaa aina voittoon. Toisin 
          sanoen niissä tapauksissa, joissa pelaaja alun perin valitsi väärin, hän voittaa aina vaihtamalla ovea.
        </p>
        <p>
          Teoreettisiin todennäköisyyksiin voi saada otetta simuloimalla suuria määriä pelikertoja ja laskemalla
          voitto-osuuksia. Alla voit valita toistojen lukumäärän ja taktiikaksi joko pysyä aina alkuperäisessä valinnassa
          tai aina vaihtaa sitä. Mitä tapahtuu, kun kasvatat toistojen määrää?
        </p>

        <div style={this.sectionStyle}>
          <h2>Vaihe 1: Valitse toistojen määrä ja taktiikka</h2>
          <Form handleSubmit={this.handleSubmit} />
          <div>{"Toistojen määrä: " + this.state.iterations}</div>
          <div>{"Valittu taktiikka: " + this.state.tactics}</div>
          <h2>Vaihe 2: Simuloi tuloksia</h2>
          <p>Peli arpoo sekä palkinto-oven, että pelaajan valitseman oven, mutta noudattaa aina taktiikkaa, joka on 
            valittu yläpuolella. Tätä toistetaan valittu määrä ja kierroksilla saatujen voittojen lukumäärä lasketaan.</p>
          <Button variant="contained" color="primary" onClick={this.simulate}>Simuloi</Button>
          <div>{"Voittojen lukumäärä: " + this.state.victories}</div>
          <div>{"Voittoprosentti: " + this.state.winRate}</div>
          <Button variant="contained" color="primary" onClick={this.reset}>Nollaa</Button>
        </div>

        <p>
          Ongelman voi tehdä intuitiivisemmaksi kasvattamalla ovien määrää. Ajatellaan, että ovia on sata ja edelleen
          vain yhden takana on palkinto. Kun pelaaja valitsee oven, hänen todennäköisyytensä osua oikeaan on 1/100.
          Kun pelinjohtaja nyt avaa 98 voitotonta ovea ja kysyy, haluaako pelaaja pysyä valinnassaan vai vaihtaa jäljelle
          jääneeseen oveen, on pelaajalla huomattavasti enemmän tietoa tilanteesta kuin alussa. Vaihtamalla hänen
          onnistumistodennäköisyytensä on 99/100.
        </p>
        
      </div>
    )
  }
}

export default App;

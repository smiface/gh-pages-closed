import React from 'react';
import './App.css'
import Context from './Components/Context'
import { data } from './Data'
import { HashRouter, Route, Link } from 'react-router-dom'

import Another from './Components/Another/Another'
import Header from './Components/Header/Header'
import Index from './Components/Index/Index'
import Footer from './Components/Footer/Footer'
import Price from './Components/Price/Price'
import News from './Components/News/News'
import Shop from './Components/Shop/Shop'
import Item from './Components/Item/Item'
import Gtamap from '../gtamap/Gtamap'

import WatchApp from '../Watch/App'

import Roulette from '../notupx/Roulette/Roulette'
import Highlow from '../notupx/Highlow/Highlow'
import DradonGame from '../notupx/dradonGame/DradonGame'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkmode: true
    }

    this.changeDarkMode = this.changeDarkMode.bind(this)
  }

  changeDarkMode() {
    this.setState({ darkmode: !this.state.darkmode }, () => console.log(this.state.darkmode))
  }

  render() {
    return (
      <HashRouter >
        <Context.Provider value={{
          data: data,
          darkmode: this.state.darkmode
        }}>

          <Header changeDarkMode={this.changeDarkMode} />

          <Route exact path='/index' component={Index} />
          <Route exact path='/price' component={Price} />
          <Route exact path='/news' component={News} />
          <Route exact path='/' component={Shop} />
          <Route path='/item/:id?' component={Item} />
          <Route path='/another' component={Another} />
          <Route path='/roulette' component={Roulette} />
          <Route path='/watchApp' component={WatchApp} />
          <Route path='/gtamap' component={Gtamap} />
          {/* <Route path='/landingpage1' component={Landingpage1} /> */}
          <Route path='/highlow' component={Highlow} />
          <Route path='/dradonGame' component={DradonGame} />
          <Footer />

        </Context.Provider>
      </HashRouter>
    )
  }

}
export default App;
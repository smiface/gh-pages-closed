import React from 'react';

import Context from './Barbershop/Components/Context'
import { data } from './Barbershop/Data'

import { HashRouter, Route, Link } from 'react-router-dom'

import Barbershop from './Barbershop/App'
import BarbershopIndex from './Barbershop/Components/Index/Index'
import BarbershopPrice from './Barbershop/Components/Price/Price'
import BarbershopNews from './Barbershop/Components/News/News'
import BarbershopShop from './Barbershop/Components/Shop/Shop'
import BarbershopItem from './Barbershop/Components/Item/Item'
import BarbershopLogin from './Barbershop/Components/Login/Login'


import Gtamap from './gtamap/Gtamap'
import Home from './Home/home'

import WatchApp from './Watch/App'
import Porten from './Porten/index'

import Roulette from './notupx/Roulette/Roulette'
import Highlow from './notupx/Highlow/Highlow'
import DradonGame from './notupx/dradonGame/DradonGame'

import clipsSmiface from './twitchclips/Smiface/clips'
import chatPaste from './chatpaste/chatpaste'

import lazyloadPage from './lazyload/lazyload'

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
          darkmode: this.state.darkmode,
          changeDarkMode() {
            this.setState({ darkmode: !this.state.darkmode }, () => console.log(this.state.darkmode))
          }
        }}>
          < Home />

          <Route exact path='/barbershop/index' component={BarbershopIndex} />
          <Route exact path='/barbershop/shop' component={BarbershopShop} />
          <Route exact path='/barbershop/news' component={BarbershopNews} />
          <Route exact path='/barbershop/price' component={BarbershopPrice} />
          <Route exact path='/barbershop/item/:id' component={BarbershopItem} />
          <Route exact path='/barbershop/item' component={BarbershopItem} />
          <Route exact path='/barbershop/login' component={BarbershopLogin} />
          
          <Route path='/roulette' component={Roulette} />
          <Route path='/watchApp' component={WatchApp} />
          <Route path='/gtamap' component={Gtamap} />
          <Route path='/highlow' component={Highlow} />
          <Route path='/dradonGame' component={DradonGame} />
          <Route path='/clipsSmiface' component={clipsSmiface} />
          <Route path='/chatPaste' component={chatPaste} />
          <Route path='/lazyloadPage' component={lazyloadPage} />
          <Route path='/Porten' component={Porten} />

        </Context.Provider>
      </HashRouter>
    )
  }

}
export default App;
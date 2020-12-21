import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'

import Context from './Barbershop/Components/Context'
import { data } from './Barbershop/Data'
import './Barbershop/App.css'

import BarbershopIndex from './Barbershop/Components/Index/Index'
import BarbershopPrice from './Barbershop/Components/Price/Price'
import BarbershopNews from './Barbershop/Components/News/News'
import BarbershopShop from './Barbershop/Components/Shop/Shop'
import BarbershopItem from './Barbershop/Components/Item/Item'
import BarbershopLogin from './Barbershop/Components/Login/Login'

import Home from './Home/home'
import Porten from './Porten/index'
import chatPaste from './chatpaste/chatpaste'

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
          < Home />

          <Route exact path='/' component={BarbershopIndex} />
          <Route exact path='/barbershop/shop' component={BarbershopShop} />
          <Route exact path='/barbershop/news' component={BarbershopNews} />
          <Route exact path='/barbershop/price' component={BarbershopPrice} />
          <Route exact path='/barbershop/item/:id' component={BarbershopItem} />
          <Route exact path='/barbershop/item' component={BarbershopItem} />
          <Route exact path='/barbershop/login' component={BarbershopLogin} />
          
          <Route path='/chatPaste' component={chatPaste} />
          <Route path='/Porten' component={Porten} />

        </Context.Provider>
      </HashRouter>
    )
  }

}
export default App;
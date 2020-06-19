import React from 'react';
import './App.css'
import Context from './Components/Context'
import { data } from './Data'
import { Link, HashRouter, Route} from 'react-router-dom'

import Index from './Components/Index/Index'
import Footer from './Components/Footer'
import Price from './Components/Price/Price'
import News from './Components/News/News'
import Shop from './Components/Shop/Shop'
import Item from './Components/Item/Item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // basket: []
    }
  }

  ComponentRoute(comp) {
    return (
      <Context.Provider value={{
        data: data
      }}>
        <comp />
      </Context.Provider>
    )
  }

  render() {
    return (
      <HashRouter >
        <Context.Provider value={{
          data: data,
          // basket: this.state.basket
          // basket: Context.data.basket
        }}>


          <header className="">
            <div className="col-12 df_jcsb">

              <nav className="df_jcsb col-7  ">
                <Link className="" to="/">Магазин</Link>
                <Link className="" to="/index">Информация</Link>
                <Link className="" to="/price">Прайс-лист</Link>
                <Link className="" to="/news">Новости</Link>
                {/* <Link className="" to="/users">Контакты</Link> */}
              </nav>

              <button>
                <img src={require('./svg/login.svg')} />
                <div>Вход</div>
              </button>
            </div>
          </header>

        

          <Route exact path='/index' component={Index} />
          <Route exact path='/price' component={Price} />
          <Route exact path='/news' component={News} />
          <Route exact path='/' component={Shop} />
          <Route  path='/item/:id?' component={Item} />


          <Footer />
        </Context.Provider>
      </HashRouter>
    )
  }

}
export default App;


//test
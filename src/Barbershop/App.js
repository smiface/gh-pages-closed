import React from 'react';
import './App.css'
import Context from './Components/Context'

import { HashRouter, Route, Link } from 'react-router-dom'


import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Index from './Components/Index/Index'
import Price from './Components/Price/Price'
import News from './Components/News/News'
import Shop from './Components/Shop/Shop'
import Item from './Components/Item/Item'

class Barbershop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkmode: true
    }

    this.changeDarkMode = this.changeDarkMode.bind(this)
  }

  // changeDarkMode() {
  //   this.setState({ darkmode: !this.state.darkmode }, () => console.log(this.state.darkmode))
  // }



  // render() {
  //   return (
  //     <HashRouter >
  //       <Context.Consumer>
  //         {
  //           (Context) => {
  //             return (
  //               <div>
  //                 <Header changeDarkMode={this.changeDarkMode} />

                  

  //                 <Footer />
  //               </div>

  //             )
  //           }


  //         }

  //       </Context.Consumer>
  //     </HashRouter>
  //   )
  // }

}
export default Barbershop;


import React from 'react'
import './style.css'
import Topline from './top-line/index'
import SecondLine from './second-line/index'
import FirstScreen from './first-screen/index'
import NewSeason from './new-season/index'
import Collection2018 from './collection-2018/index'
import NewGoods from './new-goods/index'
import OurBrands from './our-brands/index'
import Footer from './footer/index'
import LastLine from './last-line/index'

class Porten extends React.Component {
    constructor(props) {
      super(props)
    }
  
  
    render() {
      return (
        <div className='porten_component'>
          <Topline />
          <SecondLine />
          <FirstScreen />
          <NewSeason />
          <Collection2018 />
          <NewGoods />
          <OurBrands />
          <Footer />
          <LastLine />
        </div>
  
      )
    }
  
  }
  export default Porten;
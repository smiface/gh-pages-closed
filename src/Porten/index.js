import React from 'react'
import './style.css'
import './adaptive.css'

import Topline from './top-line/index'
import SecondLine from './second-line/index'
import FirstScreen from './first-screen/index'
import NewSeason from './new-season/index'
import Collection2018 from './collection-2018/index'
import NewGoods from './new-goods/index'
import OurBrands from './our-brands/index'
import Footer from './footer/index'
import LastLine from './last-line/index'
import Aside from './aside/index'

class Porten extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let components = document.querySelectorAll('.component')
    let watches = document.querySelectorAll('.watch_bg')

    window.addEventListener('scroll', function () {
      components.forEach((item, index) => {
        if (index > 1 && index < components.length - 1) {
          isAnyPartOfElementInViewport(item) ? item.style.opacity = '1' : item.style.opacity = '0.3'
        }
      })

      watches.forEach(item => {
        isAnyPartOfElementInViewport(item) ? item.style.marginTop = '0' : item.style.marginTop = '50px'
      })

      function isAnyPartOfElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const vertInView = (rect.top + 200 <= windowHeight) && ((rect.top - 200 + rect.height) >= 0);

        if (vertInView == true) {
          return true
        } else {
          return false
        }
      }
    });
  }

  render() {
    return (
      <div className='porten_component'>
        <Aside />
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
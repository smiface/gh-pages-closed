import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import './style.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='homeBtn'>
        
        <Link to='/' className='link'>home</Link>
        <Link to='/barbershop/index' className='link'>Barbershop</Link>
        <Link to='/roulette'className='link'>notupx</Link>
        <Link to='/clipsSmiface'className='link'>clips</Link>
        <Link to='/chatPaste'className='link'>chatPaste</Link>
        <Link to='/watchapp'className='link'>Watch</Link>
        <Link to='/lazyloadPage' className='link'>lazyloadPage</Link>
        <Link to='/porten' className='link'>porten</Link>

        <div>123</div>
      </div>

    )
  }

}
export default Home;
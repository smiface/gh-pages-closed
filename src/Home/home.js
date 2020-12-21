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
        <Link to='/' className='link'>Barbershop</Link>
        <Link to='/chatPaste'className='link'>chatPaste</Link>
        <Link to='/porten' className='link'>porten</Link>
      </div>

    )
  }
}
export default Home;
import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
// import './Style/Another.css'
import '../../Styles/Components/Another/Another.css'

class Another extends React.Component {

  render() {
    return (
      <div className='another__component'>
        <Link className="" to="/roulette">Рулетка</Link>
        <Link to='/highlow'> Highlow </Link>
        <Link to='/dradonGame'>Dragon</Link>
        <Link to='/watchapp'>Watch</Link>
        {/* <Link className="landingpage1" to="/landingpage1">Романова Лера</Link> */}
        {/* <Link className="" to="/gtamap">GTA map</Link> */}
      </div>

    )
  }

}
export default Another;
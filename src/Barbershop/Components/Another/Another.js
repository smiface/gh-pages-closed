import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
// import './Style/Another.css'
import '../../Styles/Components/Another/Another.css'

class Another extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='another__component'>
        <Link className="" to="/roulette">Рулетка</Link>
        <Link className="" to="/gtamap">GTA map</Link>
      </div>

    )
  }

}
export default Another;
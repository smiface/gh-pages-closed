import React from 'react';
import Context from '../Barbershop/Components/Context'
import Header from './Header/Header'
// import Footer from './Footer/Footer'
import './WatchApp.css'


class WatchApp extends React.Component {
  constructor(props) {
    super(props)

    this.updateStyle = this.updateStyle.bind(this)
  }

  updateStyle(value) {
    // this.setState({ style: value }, () => console.log(this.state.style))
  }

  render() {
    return (

      <Context.Consumer >
        {
          (Context) => {
            return (
              <div className='watchApp'>
              {/* <div className={Context.darkmode ? 'watchApp_dark'  : 'watchApp_light'} > */}
                <Header />

                {/* <Footer /> */}
              </div>
            )
          }
        }
      </Context.Consumer >
    )
  }

}
export default WatchApp;
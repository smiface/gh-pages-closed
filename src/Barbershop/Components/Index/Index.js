import React from 'react'
import Context from '../Context'
import '../../Styles/Components/Index/Index.css'

import One from './One'
import Two from './Two'
import Three from './Three'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'


class Index extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <Context.Consumer>
        {
          (Context) => {
            return (
              <>
                <Header />
                <main className={Context.darkmode ? "main_dark index-component" : "main_light index-component"}>
                  <One />
                  <Two />
                  <Three />
                </main>
                <Footer />
              </>
            )
          }


        }

      </Context.Consumer>
    )
  }

}
export default Index;
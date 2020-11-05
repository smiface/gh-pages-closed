import React from 'react'
import Context from '../Context'
import '../../Styles/Components/Index/Index.css'

import Header from '../Header/Header'

import One from './One'
import Two from './Two'
import Three from './Three'

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
              <main className={Context.darkmode ? "main_dark index-component" : "main_light index-component"}>
                <Header />
                <One />
                <Two />
                <Three />
              </main>

            )
          }


        }

      </Context.Consumer>
    )
  }

}
export default Index;
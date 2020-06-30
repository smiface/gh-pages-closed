import React from 'react'
import Context from '../Context'
import './Styles/Index.css'

import One from './One'
import Two from './Two'
import Three from './Three'

class Index extends React.Component {
  
  render() {
    return (
      <Context.Consumer>
        {
          (Context) => {
            return (
              <main className={Context.darkmode ? "main_dark index-component" : "main_light index-component"}>
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
import React from 'react'
import Context from '../Context'
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
              <main className="index-component">
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
import React from 'react'
import { Link, HashRouter, Route } from 'react-router-dom'


import logoHome from './img/k-logo-dark.png'
import logoSearch from './img/search.png'
import Context from '../Barbershop/Components/Context'

import { data } from '../Barbershop/Data'

class AppHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (
                            <header>
                                <img src={logoHome} />
                                <div>test</div>
                            </header>
                        )
                    }
                }
            </Context.Consumer>
        )
    }

}
export default AppHeader;
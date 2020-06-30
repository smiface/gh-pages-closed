import React from 'react'
import Context from '../Context';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <footer>
                              Footer
                            </footer>
                        )
                    }
                }
            </Context.Consumer >

        )
    }

}
export default Footer;
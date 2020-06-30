import React from 'react'
import Context from '../Context'

class PagesNavigation extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (


                            <nav className="col-3 filter_group df_jcsa shop_nav">

                                <button className="btn_Black" onClick={() => {
                                    this.props.updateFinalArr(Context.data.items.filter(item => item.id >= 0 && item.id <= 6))
                                }}
                                >1</button>
                                <button className="btn_Black" onClick={() => {
                                    this.props.updateFinalArr(Context.data.items.filter(item => item.id > 6 && item.id <= 12))
                                }}
                                >2</button>
                                <button className="btn_Black" onClick={() => {
                                    this.props.updateFinalArr(Context.data.items.filter(item => item.id > 12 && item.id <= 18))
                                }}
                                >3</button>
                                <button className="btn_Black" onClick={() => {
                                    this.props.updateFinalArr(Context.data.items.filter(item => item.id > 18 && item.id <= 24))
                                }}
                                >4</button>
                                
                            </nav>


                        )
                    }


                }

            </Context.Consumer >
        )
    }

}
export default PagesNavigation;

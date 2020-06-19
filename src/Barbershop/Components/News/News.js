import React, { useContext } from 'react'
import Context from '../Context'
import '../Styles/Index.css'

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (
                            <main className="news_component">
                                <div className="col-12 relative ">
                                    {Context.data.news.map((item, index) => {
                                        return (
                                            <div className="relative df_col df_jcsb col-12 news_item" key={index} >
                                                <div className="content"></div>
                                                <div className="col-10  df_col ">
                                                    <h3>{item.title}</h3>
                                                    <p className="col-10 news_item_text">{item.text}</p>
                                                    <p className="col-10 news_item_text">{item.date}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </main>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default News;
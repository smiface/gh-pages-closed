import React, { useContext } from 'react'
import Context from '../Context'
import { Link, HashRouter, Route, Router } from 'react-router-dom'

class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            galleryIndex: 1
        }
    }


    galleryIndexNext() {
        (this.state.galleryIndex < 4) ?
            this.setState({
                galleryIndex: this.state.galleryIndex + 1
            }) :
            this.setState({
                galleryIndex: 1
            })
    }

    galleryIndexPrev() {
        (this.state.galleryIndex < 2) ?
            this.setState({
                galleryIndex: 4
            }) :
            this.setState({
                galleryIndex: this.state.galleryIndex - 1
            })
    }



    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (
                            <div className="df_jcsb content col-12">

                                {/* новости */}
                                <news className="col-5 df_col indexNews df_jcsb">
                                    <h3>НОВОСТИ</h3>
                                    <div>
                                        <div>
                                            <p>{Context.data.news[Context.data.news.length - 1].title}</p>
                                            <div className="date">
                                                {Context.data.news[Context.data.news.length - 1].date}
                                            </div>
                                        </div>

                                        <div>
                                            <p>{Context.data.news[Context.data.news.length - 2].title}</p>
                                            <div className="date">
                                                {Context.data.news[Context.data.news.length - 2].date}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn_Black col-2">
                                        <Link className="color_white" to="/news">Все новости</Link>
                                    </button>
                                </news>

                                {/* галлерея */}

                                <gallery className="df col-5 ">

                                    <img className="indexGalleryMidLine" src={require('../Styles/img/midLine.png')} />

                                    <div className="col-4 df_col df_jcsa">

                                        <h3>Галлерея</h3>
                                        <img src={require('../Styles/img/gallery' + this.state.galleryIndex + '.png')} />

                                        <div className="col-4 df_jcsb">
                                            <button className="btn_Black col-2" onClick={() => this.galleryIndexPrev()} >Назад</button>
                                            <button className="btn_Black col-2" onClick={() => this.galleryIndexNext()}>Вперед</button>
                                        </div>
                                    </div>

                                </gallery>
                            </div>
                        )

                    }


                }

            </Context.Consumer>
        )
    }

}

export default Two
import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'

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
                                <div className="col-5 df_col df_jcsb news df_jcsb  ">
                                    <h3>НОВОСТИ</h3>
                                    <div >
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



                                    <Link className="color_white  col-2" to="/news">
                                        <button className="btn_Black col-2">
                                            Все новости
                                    </button>
                                    </Link>

                                </div>

                                {/* галлерея */}

                                <div className="df col-5 ">

                                    <img className="indexGalleryMidLine" src={require('../../Styles/Components/Index/midLine.png')} alt='separate line'/>

                                    <div className="col-4 df_col df_jcsb df_jcsa">

                                        <h3>Галлерея</h3>
                                        <img src={require('../../Styles/Components/Index/gallery' + this.state.galleryIndex + '.png')}  alt='separate line'/>

                                        <div className="col-4 df_jcsb">
                                            <button className="btn_Black col-2" onClick={() => this.galleryIndexPrev()} >Назад</button>
                                            <button className="btn_Black col-2" onClick={() => this.galleryIndexNext()}>Вперед</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )

                    }


                }

            </Context.Consumer>
        )
    }

}

export default Two
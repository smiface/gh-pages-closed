import React from 'react'
import Context from '../Context'
import '../../Styles/Components/Item/Item.css'

import Header from '../Header/Header'
class Item extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        const id = this.props.match.params.id - 1;

                        return (
                            <div>

                                <Header />
                                <main className={Context.darkmode ? "Item-component  df main_dark " : "Item-component  df main_light"}>
                                    <div className="col-12 df_jcsa ">
                                        <div className="shop-item df_col col-6  ">

                                            <div className="df_col col-6">

                                                <div className="df_col slider df_jcsb">
                                                    {/* основная картинка */}
                                                    <img className="slider__main__img" src={require('../../Styles/Components/Item/item' + (id + 1) + '.png')} alt='item_image_1' />

                                                    <div className="df_jcsb ">


                                                        <img className="slider__secondary__img" src={require('../../Styles/Components/Item/item' + (id + 1) + '.png')} alt='item_image_1'
                                                            onClick={
                                                                () => document.querySelector('.slider__main__img').src = require('../../Styles/Components/Item/item' + (id + 1) + '.png')
                                                            }
                                                        />


                                                        <img className="slider__secondary__img" src={require('../../Styles/Components/Item/item' + (id + 1) + '_2.png')} alt='item_image_2'
                                                            onClick={
                                                                () => document.querySelector('.slider__main__img').src = require('../../Styles/Components/Item/item' + (id + 1) + '_2.png')
                                                            } />


                                                        <img className="slider__secondary__img" src={require('../../Styles/Components/Item/item' + (id + 1) + '_3.png')} alt='item_image_3'
                                                            onClick={
                                                                () => document.querySelector('.slider__main__img').src = require('../../Styles/Components/Item/item' + (id + 1) + '_3.png')
                                                            } />


                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-5 item__info ">
                                            <div>{Context.data.items[id].code}</div>
                                            <h3>{Context.data.items[id].title}</h3>
                                            <p>{Context.data.items[id].about}</p>

                                            <div className="col-4 df_jcsb ai_center ">
                                                <p className=" col-2 item_price center">{Context.data.items[id].price} ₽</p>
                                            </div>
                                        </div>
                                    </div>


                                </main>

                            </div>


                        )
                    }
                }
            </Context.Consumer >
        )
    }

}
export default Item;
import React, { useContext } from 'react'
import Context from '../Context'
import '../Styles/Index.css'
import { Link, Route, Router } from 'react-router-dom'
import Item from '../Item/Item'
import BuyBtn from './BuyBtn'

let p1 = new Promise(function (resolve, reject) {
    resolve()
})



class ShopItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            finalArr: this.props.finalArr,
            basket: []
        }
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (

                            <div className="shopItems-component df_col">

                                {this.state.isBasketShow ? <div> {this.state.basket.map(item =>
                                    <div>
                                        <img src={require('../Styles/img/item' + item.id + '.png')} />
                                        <p>{item.title}</p>
                                        <p>Количество : {item.basketSum + 1}</p>
                                    </div>)} </div> : null}




                                {this.props.finalArr === false ?

                                    Context.data.items.map((item, index) => {
                                        return (

                                            //карточка каждого товара
                                            <div className="shop-item df_col">
                                                <img src={require('../Styles/img/item' + item.id + '.png')} />
                                                <Link to={'item/' + (item.id)}><p>{item.title}</p></Link>
                                                <div className="df_jcsa ai_center">
                                                    <p>{item.price} ₽</p>

                                                    <BuyBtn item={item} updateBasket={this.props.updateBasket} basket={this.state.basket} />
                                                </div>

                                            </div>
                                        )

                                    }) :

                                    this.props.finalArr === 0 ?
                                        <div> all items </div> :
                                        this.props.finalArr.length === 0 ?
                                            <p className="col-8"> Товаров по данному фильтру не найдено</p> :

                                            this.props.finalArr.map((item, index) => {
                                                return (

                                                    //карточка каждого товара
                                                    <div className="shop-item df_col">
                                                        <img src={require('../Styles/img/item' + item.id + '.png')} />
                                                        <Link to={'item/' + (item.id)}><p>{item.title}</p></Link>

                                                        <div className="df_jcsa ai_center">
                                                            <p>{item.price} ₽</p>
                                                            <BuyBtn item={item} updateBasket={this.props.updateBasket} basket={this.state.basket} />
                                                        </div>

                                                    </div>
                                                )

                                            })


                                }

                            </div>

                        )
                    }


                }

            </Context.Consumer >
        )
    }

}
export default ShopItems;

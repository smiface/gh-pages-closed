import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import BuyBtn from './BuyBtn'


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
                                        <img src={require('../../Styles/Components/Shop/item' + item.id + '.png')} alt='item img' />
                                        <p>{item.title}</p>
                                        <p>Количество : {item.basketSum + 1}</p>
                                    </div>)} </div> : null}

                                {this.props.finalArr === false ?

                                    Context.data.items
                                        .filter(item => item.id >= 0 && item.id <= 6)
                                        .map((item, index) => {
                                            return (
                                                //карточка каждого товара
                                                <div className="shop-item df_col">
                                                    <img src={require('../../Styles/Components/Item/item' + item.id + '.png')} alt='item img' />
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
                                            <p className="col-8 no_items"> Товаров по данному фильтру не найдено</p>
                                            :
                                            this.props.finalArr.map((item, index) => {
                                                return (

                                                    //карточка каждого товара
                                                    <div className="shop-item df_col">
                                                        <img src={require('../../Styles/Components/Item/item' + item.id + '.png')} alt='item img' />
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

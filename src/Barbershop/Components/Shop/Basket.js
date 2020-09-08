import React from 'react'
import Context from '../Context'



class Basket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Context.Consumer>
                {(Context) => {
                    return (

                        <div className="flip basket">
                            {this.props.basket.map(item => {
                                return (

                                    <div className="df_jcsb ai_center basket_item flip">
                                        <img src={require('../../Styles/Components/Shop/item' + item.id + '.png')} className='col-2' alt='item_photo'/>
                                        <p>{item.title}</p>

                                        <div className='df_jcsb col-3 basket_sum'>
                                            <p>{item.price}  ₽</p>

                                            {/* удалить 1 товар из корзины */}
                                            <button className='btn_Basket_minus btn_Basket' onClick={() => {

                                                //если количество 1
                                                if (this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum === 1) {
                                                    //убавить на 1 и поменять стиль 
                                                    setTimeout(() => {
                                                        this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum = this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum - 1
                                                        this.props.updateBasket(this.props.basket)
                                                    }, 1)
                                                    //убавить на 1
                                                } else if (this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum > 0) {
                                                    setTimeout(() => {
                                                        this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum = this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum - 1
                                                        this.props.updateBasket(this.props.basket)
                                                    }, 1)
                                                }

                                            }}>-</button>


                                            <p>{item.basketSum}</p>
                                            {/* добавить 1 товар в корзину */}
                                            <button className='btn_Basket' onClick={() => {

                                                this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum =
                                                    this.props.basket.filter(obj => obj === Context.data.items[item.id - 1])[0].basketSum + 1

                                                setTimeout(() => {
                                                    this.props.updateBasket(this.props.basket)
                                                }, 10)

                                            }}>+</button>
                                        </div>
                                    </div>


                                )
                            })}
                        </div>

                    )
                }
                }

            </Context.Consumer >
        )
    }

}
export default Basket;
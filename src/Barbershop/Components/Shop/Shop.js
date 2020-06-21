import React from 'react'
import Context from '../Context'
import ShopItems from './ShopItems'
import { Link } from 'react-router-dom'
import ShopFilter from './ShopFilter'
import Basket from './Basket'

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            finalArr: false,
            basket: [],
            isBasketShow: false
        }
    }

    updateBasket = (value) => {
        this.setState({ basket: value })
    }

    updateFinalArr = (value) => {
        this.setState({ finalArr: value })
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (

                            <main className="shop-component content ">
                                <div className="col-12 df_col">

                                    <nav className=''>
                                        <h3>Средства для ухода</h3>

                                        <div className="df price-nav ai_center">
                                            <Link to="/index">Главная</Link>
                                            <div className="romb"></div>
                                            <Link to="/shop">Магазин</Link>
                                            <div className="romb"></div>
                                            <Link to="/shop">Средства для ухода</Link>
                                        </div>
                                    </nav>

                                    <button className="btn_Black" onClick={
                                        () => this.setState({ isBasketShow: !this.state.isBasketShow })
                                    }>Корзина</button> <br />

                                    {this.state.isBasketShow ? <Basket basket={Context.data.basket} updateBasket={this.updateBasket} /> : null}

                                    <div className="df_jcsa col-12 ">

                                        <ShopFilter updateFinalArr={this.updateFinalArr} />
                                        <div className="col-9 df_col filter_group">

                                            <ShopItems finalArr={this.state.finalArr} updateBasket={this.updateBasket} />

                                            <nav className="col-3 filter_group df_jcsa shop_nav">
                                                <button className="btn_Black">1</button>
                                                <button className="btn_Black">2</button>
                                                <button className="btn_Black">3</button>
                                                <button className="btn_Black">4</button>
                                            </nav>
                                        </div>

                                    </div>

                                </div>


                            </main>

                        )
                    }


                }

            </Context.Consumer >
        )
    }

}
export default Shop;

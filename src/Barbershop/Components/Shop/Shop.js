import React from 'react'
import Context from '../Context'
import ShopItems from './ShopItems'
import { Link } from 'react-router-dom'
import ShopFilter from './ShopFilter'
import Basket from './Basket'
import PagesNavigation from './PagesNavigation'
import '../../Styles/Components/Shop/Shop.css'

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            finalArr: false,
            basket: [],
            isBasketShow: false
        };
        // this.navigatedFilter = this.navigatedFilter.bind(this)
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

                            <main className={Context.darkmode ? 'shop-component  main_dark content' : 'shop-component  main_light content'}>
                                <div className=" flip df_col">

                                    <nav className='test'>
                                        <h3>Средства для ухода</h3>

                                        <div className="df price-nav ai_center">
                                            <Link to="/index">Главная</Link>
                                            <div className="rhomb"></div>
                                            <Link to="/shop">Магазин</Link>
                                            <div className="rhomb"></div>
                                            <Link to="/shop">Средства для ухода</Link>
                                        </div>
                                    </nav>



                                    <div className="df_jcsa  flip">

                                        <ShopFilter updateFinalArr={this.updateFinalArr} />
                                        <div className="col-9 df_col filter_group">

                                            <ShopItems finalArr={this.state.finalArr} updateBasket={this.updateBasket} />

                                            <PagesNavigation updateFinalArr={this.updateFinalArr} />



                                        </div>

                                    </div>

                                    <button className="btn_Black basket" onClick={
                                        () => this.setState({ isBasketShow: !this.state.isBasketShow })
                                    }>Корзина</button> <br />

                                    {this.state.isBasketShow ? <Basket basket={Context.data.basket} updateBasket={this.updateBasket} /> : null}

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

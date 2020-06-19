import React, { useContext } from 'react'
import Context from '../Context'
import '../Styles/Index.css'
import { Link, Route, Router } from 'react-router-dom'
import Item from '../Item/Item'

let p1 = new Promise(function (resolve, reject) {
    resolve()
})

class ShopItems extends React.Component {
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

                        <button className="btn_Black col-1" onClick={() => {

                            //пуста ли карзина?
                            this.props.basket.length == 0 ?

                                //если корзина пустая
                                p1.then(() => {
                                    //добавить товар в корзину
                                    this.props.basket.push(Context.data.items[this.props.item.id - 1])
                                }).then(() => {
                                    //и создать количество
                                    this.setState(state => {
                                        this.props.basket.filter(obj => obj == Context.data.items[this.props.item.id - 1])[0].basketSum = 1
                                    })
                                })

                                :

                                //если корзина не пустая

                                //такой товар в корзине есть?
                                this.props.basket.filter(obj => obj == Context.data.items[this.props.item.id - 1]).length == 0 ?

                                    p1.then(() => {
                                        //если нет добавить товар
                                        this.props.basket.push(Context.data.items[this.props.item.id - 1])
                                    }).then(() => {
                                        //и поменять количество на 1
                                        this.setState(state => {
                                            this.props.basket.filter(obj => obj == Context.data.items[this.props.item.id - 1])[0].basketSum = 1
                                        })
                                    })

                                    :

                                    // добавить кол-во +1
                                    this.setState(state => {
                                        this.props.basket.filter(obj => obj == Context.data.items[this.props.item.id - 1])[0].basketSum =
                                        this.props.basket.filter(obj => obj == Context.data.items[this.props.item.id - 1])[0].basketSum + 1
                                    })

                                   setTimeout(() => {
                                    this.props.updateBasket(this.props.basket)
                                   }, 1);


                        }}>Купить</button>

                    )
                }}

            </Context.Consumer >
        )
    }

}
export default ShopItems;

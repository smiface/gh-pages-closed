import React from 'react'
import Context from '../Context'

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
                            Context.data.basket.length === 0 ?

                                //если корзина пустая
                                p1.then(() => {
                                    //добавить товар в корзину
                                    Context.data.basket.push(Context.data.items[this.props.item.id - 1])
                                }).then(() => {
                                    //и создать количество
                                    this.setState(state => {
                                        Context.data.basket.filter(obj => obj === Context.data.items[this.props.item.id - 1])[0].basketSum = 1
                                    })
                                })

                                :

                                //если корзина не пустая

                                //такой товар в корзине есть?
                                Context.data.basket.filter(obj => obj === Context.data.items[this.props.item.id - 1]).length===0 ?

                                    p1.then(() => {
                                        //если нет добавить товар
                                        Context.data.basket.push(Context.data.items[this.props.item.id - 1])
                                    }).then(() => {
                                        //и поменять количество на 1
                                        this.setState(state => {
                                            Context.data.basket.filter(obj => obj===Context.data.items[this.props.item.id - 1])[0].basketSum = 1
                                        })
                                    })

                                    :

                                    // добавить кол-во +1
                                    this.setState(state => {
                                        Context.data.basket.filter(obj => obj===Context.data.items[this.props.item.id - 1])[0].basketSum =
                                        Context.data.basket.filter(obj => obj===Context.data.items[this.props.item.id - 1])[0].basketSum + 1
                                    })

                                   setTimeout(() => {
                                    this.props.updateBasket(Context.data.basket)
                                   }, 1);


                        }}>Купить</button>

                    )
                }}

            </Context.Consumer >
        )
    }

}
export default ShopItems;

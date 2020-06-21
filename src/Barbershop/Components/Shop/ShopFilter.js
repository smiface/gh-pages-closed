import React from 'react'
import Context from '../Context'



class ShopFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //false - фильтра нет
            producerFiltredArr: false,
            groupFiltredArr: false,
            producerFinalArr: false,
            finalArr: false,
            x: []
        }
    }


    render() {
        return (
            <Context.Consumer>
                {(Context) => {

                    return (<div>

                        <div className="df_col df_jcsb col-3 filter filter_group" id="filter" >
                            {/* df_jcsb */}

                            {/* форма производителей */}
                            <div className="filter_group filter_group">
                                <h3>Производители :</h3>

                                <form className="col-3 producers" id="producersForm">

                                    {
                                        Context.data.producer.map((item, index) => {
                                            return (
                                                <div>
                                                    <input value={index} className="filterProducerInput input" name="radio" type="checkbox" defaultChecked={false} />
                                                    <label>{item}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </form>

                            </div>

                            {/* форма группы товаров */}
                            <div className="filter_group filter_group ">
                                <h3>Группы товаров :</h3>

                                <form className="col-3 producers" id="itemGroupForm">
                                    {Context.data.itemGroup.map((item, index) => {
                                        return (
                                            <div>
                                                <input value={index} className="filterGroupInput input" name="radio" type="radio" />
                                                <label>{item}</label>
                                            </div>
                                        )
                                    })
                                    }

                                </form>
                            </div>

                            <div className="df_col">



                                {
                                    this.state.finalArr === [] | Context.data.items | false ?

                                        null
                                        :

                                        // {/* Снять фильтр */ }
                                        <button button className=" btn_cancel_filter" onClick={() => {
                                            this.props.updateFinalArr(Context.data.items)

                                            document.querySelectorAll('.input:checked').forEach(item => {
                                                item.checked = false
                                            })

                                            // this.state.finalArr = false
                                            this.setState({ finalArr : false})


                                        }}> X Снять фильтр</button>


                                }

                                {/* Accept */}

                                <button className="btn_Black col-3"
                                    onClick={() => {
                                        //фильтр производителей
                                        //если нет фильтров   
                                        (document.querySelectorAll('.filterProducerInput:checked').length === 0) ?
                                            // вернуть всё
                                            this.setState({ producerFinalArr: Context.data.items }) :

                                            // если есть - вернуть список отфильтрованых
                                            setTimeout(
                                                () => {
                                                    this.setState({
                                                        producerFiltredArr: [],
                                                        x: Array.prototype.slice.call(
                                                            document.getElementById('producersForm')
                                                                .querySelectorAll('.filterProducerInput:checked')
                                                        )
                                                            .map(item => Number(item.value))
                                                            .map(item => Context.data.items.filter(elem => elem.producer === Context.data.producer[item]))
                                                    })

                                                    this.state.x.forEach(element => {
                                                        this.setState({
                                                            producerFiltredArr: this.state.producerFiltredArr.concat(this.state.x[this.state.x.indexOf(element)])
                                                        })
                                                    })

                                                    setTimeout(() => {
                                                        //если товаров нет вернуть []
                                                        (this.state.producerFiltredArr.length === []) ?
                                                            this.setState({
                                                                producerFinalArr: []
                                                            })
                                                            :
                                                            //если есть - присвоить
                                                            this.setState({
                                                                producerFinalArr: this.state.producerFiltredArr
                                                            })
                                                    }, 2);
                                                }, 1)

                                        //фильтр групп
                                        setTimeout(() => {
                                            document.getElementById('itemGroupForm').querySelector('.filterGroupInput:checked') ?

                                                // с фильтром
                                                setTimeout(() => {
                                                    this.setState({
                                                        finalArr: this.state.producerFinalArr.filter(item =>
                                                            item.group === Context.data.itemGroup[document.getElementById('itemGroupForm').querySelector('.filterGroupInput:checked').value]
                                                        )
                                                    })
                                                }, 4)

                                                :
                                                //без фильтра
                                                this.setState({
                                                    finalArr: this.state.producerFinalArr
                                                })



                                        }, 10);

                                        setTimeout(() => {
                                            this.props.updateFinalArr(this.state.finalArr)
                                            console.log(this.state.finalArr)
                                        }, 30);

                                    }} > ACCEPT</button>

                            </div>



                        </div>
                    </div>

                    )

                }
                }
            </Context.Consumer >
        )
    }

}
export default ShopFilter;
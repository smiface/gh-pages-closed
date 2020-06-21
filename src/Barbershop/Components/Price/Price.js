import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'

class Price extends React.Component {
   
    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <main>
                                <div className="price-component content ai_center">
                                    <div className="col-11 df_col ">
                                        <h3>Прайс-лист</h3>
                                        <div className="df_jcsa price-nav col-3 ai_center">
                                            <Link to="/">Главная</Link>
                                            <div className="romb"></div>
                                            <p> ПРАЙС-ЛИСТ </p>
                                        </div>

                                        <div className="df_jcsa ai_center">
                                            <div className="line">------------------------------------------</div>
                                            <h2>ИСТИННО МУЖСКАЯ КЛАССИКА</h2>
                                            <div className="line">------------------------------------------</div>
                                        </div>

                                        <div className="col-12 df_jcsb " >

                                            <div className="df_col col-6">

                                                <h3 className="df_col col-4 mn">
                                                    МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ СРЕДСТВА:
                                                </h3>


                                                <div className="df_col col-6">
                                                    <div className="df ai_center">
                                                        <div className="romb "></div>
                                                        <p>Baxter of California</p>
                                                    </div>

                                                    <div className="df ai_center ">
                                                        <div className="romb"></div>
                                                        <p>Mr Natty</p>
                                                    </div>

                                                    <div className="df ai_center">
                                                        <div className="romb"></div>
                                                        <p>Suavecito</p>
                                                    </div>

                                                    <div className="df ai_center">
                                                        <div className="romb"></div>
                                                        <p>Malin+Goetz</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="df_col col-6">
                                                <h3 className="col-3 mn">Цены на услуги наших мастеров : </h3>
                                                <table>
                                                    <tr className="col-6 df" >
                                                        <td className="col-3 border-black">Стрижка</td>
                                                        <td className="col-3 border-black"> 1500₽</td>
                                                    </tr>
                                                    <tr className="col-6 df">
                                                        <td className="col-3 border-black">Стрижка</td>
                                                        <td className="col-3 border-black"> 1500₽</td>
                                                    </tr>
                                                    <tr className="col-6 df">
                                                        <td className="col-3 border-black">Стрижка</td>
                                                        <td className="col-3 border-black"> 1500₽</td>
                                                    </tr>
                                                </table>

                                            </div>

                                        </div>

                                        <h3>
                                            Несколько слов о нас :
                                        </h3>

                                        <div className="df_jcsb col-12">
                                            <p className="col-6">Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.</p>
                                            <p className="col-6">Наша мастерская расположена в центре города, поэтому сделать стильную стрижку можно в любое время, даже в обеденный перерыв. Здесь вы можете погрузиться в удобную для вас атмосферу, чувствовать себя комфортно и свободно!</p>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default Price;
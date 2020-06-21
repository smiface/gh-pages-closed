import React from 'react'
import Context from '../Context'

class Three extends React.Component {
    


    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (



                            < div className="df_jcsb content col-12" >

                                


                                {/* новости */}
                                < news className="col-5 df_col indexNews df_jcsb " >
                                    <h3 className='test'>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                                    <div>
                                        <div>
                                            <p>БАРБЕРШОП «БОРОДИНСКИЙ» АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8 ТЕЛЕФОН: +7 (495) 666-02-66</p>
                                        </div>

                                        <div>
                                            <p>{Context.data.news[Context.data.news.length - 2].title}</p>
                                            <div className="date">
                                                {Context.data.news[Context.data.news.length - 2].date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 df_jcsb">
                                        {/* <button className="btn_Black col-2"></button> */}
                                        <a 
                                        href="https://www.google.com/maps/place/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F+%D0%9A%D0%BE%D0%BD%D1%8E%D1%88%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+19%2F8,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+191186/data=!4m2!3m1!1s0x4696310fca145cc1:0x42b32648d8238007?sa=X&ved=2ahUKEwi10uanhpLqAhWy6KYKHR-LBVEQ8gEwAHoECAsQAQ" 
                                        className="btn_Black col-2 center" >Как проехать</a>
                                        <button className="btn_Black col-2">Обратная связь</button>

                                    </div>
                                </news>

                                {/* галлерея */}

                                <gallery className="df col-5 ">

                                    <img className="indexGalleryMidLine" src={require('../Styles/img/midLine.png')} alt='separadtion line' />

                                    <div className="col-4 df_col df_jcsb ">

                                        <h3 className=''>ЗАПИСАТЬСЯ</h3>

                                        <div className="col-4 df_jcsb ">
                                            УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ БРОНИ
                                        </div>

                                        <div className="col-4 df_jcsb grid-2x2">

                                            <div className="col-2 df_col">
                                                <p>Дата</p>
                                                <input placeholder="08.10.2017" />
                                            </div>
                                            <div className="col-2 df_col">
                                                <p>Время</p>
                                                <input placeholder="10:00" />
                                            </div>
                                        </div>
                                        <div className="col-4 df_jcsb grid-2x2">

                                            <div className="col-2 df_col">
                                                <p>Ваше имя</p>
                                                <input placeholder="Борода" />
                                            </div>

                                            <div className="col-2 df_col">
                                                <p>Телефон</p>
                                                <input placeholder="+7 123 456-78-90" />
                                            </div>
                                        </div>
                                        <button className=" btn_Black col-4">Отправить</button>
                                    </div>

                                </gallery>
                            </div >
                        )
                    }
                }
            </Context.Consumer >

        )
    }

}
export default Three;
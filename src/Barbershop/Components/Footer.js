import React from 'react'
import Context from './Context';
import { Link } from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <div>
                                <footer className="">
                                    <div className="col-12 df_jcsb">
                                        <p className="col-4"> БАРБЕРШОП «БОРОДИНСКИЙ» АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. Б. КОНЮШЕННАЯ, Д. 19/8 КАК НАС НАЙТИ? ТЕЛЕФОН: +7 (495) 666-02-66 </p>
                                        <div className="col-2 df_col">
                                            <p>ДАВАЙТЕ ДРУЖИТЬ!</p>
                                            <div className="df_jcsb">

                                                <button className="btn_Black  btn_nav">

                                                    <a href="https://vk.com/htmlacademy">
                                                        <img src={require('./Styles/img/footer_vk.png')} alt='vk_img' />
                                                    </a>
                                                </button>

                                                <button className="btn_Black btn_nav">
                                                    <a href="https://www.facebook.com/htmlacademy/">
                                                        <img src={require('./Styles/img/footer_fb.png')} alt='fb_img' />
                                                    </a>
                                                </button>

                                                <button className="btn_Black btn_nav">
                                                    <a href="https://www.instagram.com/htmlacademy/">
                                                        <img src={require('./Styles/img/footer_inst.png')} alt='inst_img' />
                                                    </a>
                                                </button>

                                            </div>
                                        </div>

                                        <div className="col-2 df_col">
                                            <p>РАЗРАБОТАНО:</p>
                                            <button className="btn_Black col-2" > <a href="https://htmlacademy.ru/">HTML Academy </a></button>
                                        </div>
                                    </div>
                                </footer>
                                <div className={Context.darkmode ? 'footer_another_dark' : 'footer_another_light'}>
                                    <Link className="" to="/roulette">Рулетка</Link>
                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer >

        )
    }

}
export default Footer;
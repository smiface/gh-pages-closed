import React from 'react'
import Context from '../Context';
import { Link } from 'react-router-dom'
import '../../Styles/Components/Footer/Footer.css'

class Footer extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <footer className="">
                                <div className='container'>

                                    <div>
                                        <p className="col-4"> БАРБЕРШОП «БОРОДИНСКИЙ» АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. Б. КОНЮШЕННАЯ, Д. 19/8 КАК НАС НАЙТИ? ТЕЛЕФОН: +7 (495) 666-02-66 </p>
                                    </div>

                                    <div className=" df_col">
                                        <p>ДАВАЙТЕ ДРУЖИТЬ!</p>
                                        <div className="df_jcsb">

                                            <button className="btn_Black  btn_nav">

                                                <a href="https://vk.com/htmlacademy">
                                                    <img src={require('../../Styles/Components/Footer/footer_vk.png')} alt='vk_img' />
                                                </a>
                                            </button>

                                            <button className="btn_Black btn_nav">
                                                <a href="https://www.facebook.com/htmlacademy/">
                                                    <img src={require('../../Styles/Components/Footer/footer_fb.png')} alt='fb_img' />

                                                </a>
                                            </button>

                                            <button className="btn_Black btn_nav">
                                                <a href="https://www.instagram.com/htmlacademy/">
                                                    <img src={require('../../Styles/Components/Footer/footer_inst.png')} alt='inst_img' />
                                                </a>
                                            </button>

                                        </div>
                                    </div>

                                    {/* <div className=" df_col">
                                        <p>РАЗРАБОТАНО:</p>
                                        <button className="btn_Black col-2" > <a href="https://htmlacademy.ru/">HTML Academy </a></button>
                                    </div> */}

                                    <div> Т.к. изначально макет HTML Academy - адрес и ссылки на них</div>

                                </div>

                            </footer>
                        )
                    }
                }
            </Context.Consumer >

        )
    }

}
export default Footer;
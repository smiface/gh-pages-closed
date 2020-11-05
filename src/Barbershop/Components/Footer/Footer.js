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
                            <footer className="barber__footer">
                                <div className='container'>
                                    <button className="btn_Black  btn_nav">

                                        <a href="https://vk.com/">
                                            <img src={require('../../Styles/Components/Footer/footer_vk.png')} alt='vk_img' />
                                        </a>
                                    </button>

                                    <button className="btn_Black btn_nav">
                                        <a href="https://www.facebook.com/">
                                            <img src={require('../../Styles/Components/Footer/footer_fb.png')} alt='fb_img' />

                                        </a>
                                    </button>

                                    <button className="btn_Black btn_nav">
                                        <a href="https://www.instagram.com/">
                                            <img src={require('../../Styles/Components/Footer/footer_inst.png')} alt='inst_img' />
                                        </a>
                                    </button>
                                </div>
                                
                                <div className=' hidden'>
                            
                                    <div>
                                        <p className="col-4"> Улица Пушкина, дом Колотушкина </p>
                                    </div>

                                    <div className=" df_col">
                                        {/* <p>ДАВАЙТЕ ДРУЖИТЬ!</p> */}
                                        <div className="df_jcsb">

                                            <button className="btn_Black  btn_nav">

                                                <a href="https://vk.com/">
                                                    <img src={require('../../Styles/Components/Footer/footer_vk.png')} alt='vk_img' />
                                                </a>
                                            </button>

                                            <button className="btn_Black btn_nav">
                                                <a href="https://www.facebook.com/">
                                                    <img src={require('../../Styles/Components/Footer/footer_fb.png')} alt='fb_img' />

                                                </a>
                                            </button>

                                            <button className="btn_Black btn_nav">
                                                <a href="https://www.instagram.com/">
                                                    <img src={require('../../Styles/Components/Footer/footer_inst.png')} alt='inst_img' />
                                                </a>
                                            </button>

                                        </div>
                                    </div>

                                    {/* <div className=" df_col">
                                        <p>РАЗРАБОТАНО:</p>
                                        <button className="btn_Black col-2" > <a href="https://htmlacademy.ru/">HTML Academy </a></button>
                                    </div> */}

                                    {/* <div> макет багет пакет пхукет</div> */}

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
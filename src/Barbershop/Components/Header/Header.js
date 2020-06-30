import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import './Styles/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {
        return (
            <Context.Consumer>{(Context) => {
                return (

                    // с широкоэкранного устройства?
                    (window.innerWidth > 1366) ?

                        // да
                        <header className={Context.darkmode ? "header__dark" : "header__light"}>

                            <div className="col-12 df_jcsb">

                                <nav className="df_jcsb col-7  ">
                                    <Link className="" to="/">Магазин</Link>
                                    <Link className="" to="/news">Новости</Link>
                                    <Link className="" to="/index">Информация</Link>
                                    <Link className="" to="/price">Прайс-лист</Link>
                                    <Link className="" to="/roulette">Рулетка</Link>
                                </nav>

                                <button onClick={() => {
                                    this.setState({ darkmode: !this.state.darkmode })
                                    this.props.changeDarkMode()
                                }}>
                                    {Context.darkmode ? 'dark mode' : 'light mode'}
                                </button>

                                {/* <button>
                                    <img src={require('../svg/login.svg')} alt='auth_image' />
                                    <div>Вход</div>
                                </button> */}




                            </div>



                        </header>


                        :

                        // нет
                        <header className={Context.darkmode ? "header__dark" : "header__light"}>
                            <button onClick={() => this.setState({ showBar: !this.state.showBar })} className='df_col'>Show menu</button>

                            {this.state.showBar ?


                                <div className='df_col'>
                                    <Link className="" to="/"><button onClick={() => this.setState({ showBar: !this.state.showBar })} >Магазин</button></Link>
                                    <Link className="" to="/news"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Новости</button></Link>
                                    <Link className="" to="/index"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Информация</button></Link>
                                    <Link className="" to="/price"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Прайс-лист</button></Link>
                                    <Link className="" to="/roulette"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Рулетка</button></Link>

                                    <button onClick={() => {
                                        this.setState({ darkmode: !this.state.darkmode })
                                        this.props.changeDarkMode()
                                    }}>
                                        {Context.darkmode ? 'dark mode' : 'light mode'}
                                    </button>

                                    {/* <button onClick={() => this.setState({ showBar: !this.state.showBar })} >
                                        <img src={require('../svg/login.svg')} alt='auth_image' />
                                        <div>Вход</div>
                                    </button> */}

                                </div>
                                : null
                            }

                        </header>

                )
            }}
            </Context.Consumer>
        )
    }

}
export default Header;



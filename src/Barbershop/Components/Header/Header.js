import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../Styles/Components/Header/Header.css'

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

                    <div>

                        <div className='header_default'>
                            <header className={Context.darkmode ? "header__dark" : "header__light"}>

                                <div className="col-12 df_jcsb">

                                    <nav className="df_jcsb col-7  ">
                                        <Link className="" to="/">Магазин</Link>
                                        <Link className="" to="/news">Новости</Link>
                                        <Link className="" to="/index">Информация</Link>
                                        <Link className="" to="/price">Прайс-лист</Link>
                                        <Link className="" to="/another">Другое</Link>
                                        {/* <Link className="" to="/roulette">Рулетка</Link> */}
                                        {/* <Link className="" to="/gtamap">GTA map</Link> */}
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

                        </div>

                        <div className='header_burger'>
                            <header className={Context.darkmode ? "header__dark" : "header__light"}>
                                <button onClick={() => this.setState({ showBar: !this.state.showBar })} className='df_col'>Show menu</button>

                                {this.state.showBar ?


                                    <div className='df_col'>
                                        <Link className="" to="/"><button onClick={() => this.setState({ showBar: !this.state.showBar })} >Магазин</button></Link>
                                        <Link className="" to="/news"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Новости</button></Link>
                                        <Link className="" to="/index"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Информация</button></Link>
                                        <Link className="" to="/price"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Прайс-лист</button></Link>
                                        <Link className="" to="/another"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Другое</button></Link>

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

                        </div>

                    </div>
                )
            }}
            </Context.Consumer>
        )
    }

}
export default Header;



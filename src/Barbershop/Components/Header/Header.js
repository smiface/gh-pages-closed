import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../Styles/Components/Header/Header.css'

import Login from '../Login/Login'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // darkmode: Context.darkmode
            auth: false,
            authOpen: false
        };
    }

    updateAuth = (user, cookieKey) => {
        this.setState({ auth: !this.state.auth, authUser: user, cookieKey: cookieKey, authOpen: !this.state.authOpen })
        console.log(this.state.auth + this.state.authUser + this.state.cookieKey + this.state.authOpen)
    }

    componentWillMount() {
        // setInterval(() => {
        //     console.log(this.state.auth + this.state.authUser + this.state.cookieKey + this.state.authOpen)
        // }, 1000);
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
                                        <Link className="" to="/barbershop/shop">Магазин</Link>
                                        <Link className="" to="/barbershop/news">Новости</Link>
                                        <Link className="" to="/barbershop/index">Информация</Link>
                                        <Link className="" to="/barbershop/price">Прайс-лист</Link>
                                        {/* <Link className="" to="/another">Другое</Link> */}
                                        {/* <Link className="" to="/roulette">Рулетка</Link> */}
                                        {/* <Link className="" to="/gtamap">GTA map</Link> */}
                                    </nav>

                                    <button onClick={() => {
                                        this.setState({ darkmode: !this.state.darkmode })
                                        Context.darkmode = !Context.darkmode
                                        // console.log(Context.darkmode)
                                        // this.props.changeDarkMode()
                                        console.log(this.state.darkmode)
                                    }}>
                                        {Context.darkmode ? 'dark mode' : 'light mode'}
                                    </button>


                                    <button onClick={() => {

                                        let userAuth = localStorage.getItem('currentUser')

                                        if (this.state.authOpen == false && userAuth == null) {
                                            // показать форму авторизации
                                            this.setState({ authOpen: !this.state.authOpen })
                                            setTimeout(() => {
                                                document.querySelector('.login_component').style.opacity = '1'
                                            }, 10);
                                        }
                                        else if (this.state.authOpen == true && userAuth == null) {
                                            // скрыть форму авторизации
                                            document.querySelector('.login_component').style.opacity = '0'
                                            setTimeout(() => {
                                                this.setState({ authOpen: !this.state.authOpen })
                                            }, 300);
                                        }
                                        else {
                                            // выйти
                                            if (this.state.auth != null) {
                                                // this.updateAuth(0, 0)
                                                // userAuth = null
                                                Context.data.logOut()
                                                this.setState({ auth : false})
                                            }
                                        }
                                    }}>
                                        <img src={require('../svg/login.svg')} alt='auth_image' />
                                        <div>
                                            {
                                                (localStorage.getItem('currentUser') === null) ? 'Вход ' : 'Выход'}
                                        </div>
                                    </button>

                                </div>

                                {this.state.authOpen == false ? null : <Login updateAuth={this.updateAuth} />}

                            </header>

                        </div>

                        <div className='header_burger'>
                            <header className={Context.darkmode ? "header__dark" : "header__light"}>
                                <button onClick={() => this.setState({ showBar: !this.state.showBar })} className='df_col'>Show menu</button>

                                {this.state.showBar ?


                                    <div className='df_col'>
                                        <Link className="" to="/barbershop/"><button onClick={() => this.setState({ showBar: !this.state.showBar })} >Магазин</button></Link>
                                        <Link className="" to="/barbershop/news"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Новости</button></Link>
                                        <Link className="" to="/barbershop/index"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Информация</button></Link>
                                        <Link className="" to="/barbershop/price"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Прайс-лист</button></Link>
                                        <Link className="" to="/barbershop/another"><button onClick={() => this.setState({ showBar: !this.state.showBar })} > Другое</button></Link>

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
            }
            }
            </Context.Consumer >
        )
    }

}
export default Header;



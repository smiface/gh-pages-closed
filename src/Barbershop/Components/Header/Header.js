import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'

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

                    <header className={Context.darkmode ? "header__dark" : "header__light"}>

                        <div className="col-12 df_jcsb">

                            <nav className="df_jcsb col-7  ">
                                <Link className="" to="/">Магазин</Link>
                                <Link className="" to="/news">Новости</Link>
                                <Link className="" to="/index">Информация</Link>
                                <Link className="" to="/price">Прайс-лист</Link>
                            </nav>

                            <button onClick={() => {
                                this.setState({ darkmode: !this.state.darkmode })
                                this.props.changeDarkMode()
                            }}>
                                {Context.darkmode ? 'dark mode' : 'light mode'}
                            </button>

                            <button>
                                <img src={require('../svg/login.svg')} alt='auth_image' />
                                <div>Вход</div>
                            </button>


                        </div>
                    </header>

                )
            }}</Context.Consumer>
        )
    }

}
export default Header;

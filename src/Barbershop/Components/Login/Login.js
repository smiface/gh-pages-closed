import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../Styles/Components/Login/login.css'
import { Redirect, Route } from "react-router";
import News from '../News/News'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            darkmode: Context.darkmode
        };
    }

    createCookie = (user) => {
        let time = new Date
        time = time.getTime()
        let encodeUser = user.id.toString() + user.login.toString()
        let arr = []
        encodeUser.split('').forEach(item => {
            arr.push(item.charCodeAt())
        })
        let cookie = time + arr.join('')
        return cookie
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <>
                                {/* <Header /> */}
                                <main className={Context.darkmode ? 'login_component' : 'login_component'}>
                                    <form>
                                        <input id='Login'></input>
                                        <label htmlFor='Login'>login **должен быть больше 5 символов</label>
                                        <input id='Password' type='password'></input>
                                        <label htmlFor='Password'>password **должен быть больше 5 символов</label>

                                        <button onClick={() => {

                                            let LoginRequire = document.getElementById('Login').value
                                            let PasswordRequire = document.getElementById('Password').value
                                            let userRequire = {
                                                login: LoginRequire,
                                                password: PasswordRequire
                                            }

                                            if (LoginRequire.length <= 5) {
                                                console.log('введите логин')
                                            }

                                            if (LoginRequire.length > 5 && PasswordRequire.length > 5) {
                                                let userString = JSON.stringify(userRequire)

                                                //userNeeded из Data, только если авторизация успешна

                                                setTimeout(() => {
                                                    let loginResult = Context.data.logIn(userString)
                                                    let cookieKey = this.createCookie(loginResult)
                                                    loginResult = JSON.stringify(loginResult)
                                                    this.props.updateAuth(loginResult, cookieKey)

                                                }, 1000);
                                            }
                                        }}>
                                            login
                                        </button>
                                    </form>
                                </main>
                            </>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default Login;
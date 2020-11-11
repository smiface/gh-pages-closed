import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../Styles/Components/Login/login.css'
import { Redirect, Route } from "react-router";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Login extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {
                        return (
                            <>
                                <Header />
                                <main className={Context.darkmode ? 'main_dark login_component' : 'main_light login_component'}>
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
                                                let fakeJSON = JSON.stringify(userRequire)
                                                Context.data.fakeLogin(fakeJSON)
                                            }


                                            // console.log(fakeJSON)

                                            // let userRequire = Context.data.users.find(item => item.login == LoginRequire)
                                            // console.log( userRequire )
                                            // console.log(Context.data.users[0].login)
                                        }}>
                                            login
                                        </button>
                                    </form>
                                </main>
                                <Footer />
                            </>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default Login;
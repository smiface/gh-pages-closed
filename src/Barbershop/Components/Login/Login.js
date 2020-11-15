import React from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../Styles/Components/Login/login.css'
import { Redirect, Route } from "react-router";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // darkmode: Context.darkmode
            a: 1
        };



        // this.props.updateAuth = (value, user, cookieKey)

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
                                                let fakeJSON = JSON.stringify(userRequire)

                                                //userNeeded из Data, только если авторизация успешна
                                                let loginResult = Context.data.fakeLogin(fakeJSON)



                                                setTimeout(() => {
                                                    // this.props.updateAuth = (value, user, cookieKey)

                                                    let loginResult = Context.data.fakeLogin(fakeJSON)
                                                    let cookieKey = this.createCookie(loginResult)
                                                    loginResult = JSON.stringify(loginResult)
                                                    // this.props.updateAuth(true, loginResult, cookieKey)
                                                    this.props.updateAuth(loginResult, cookieKey)
                                                }, 1000);
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
                                {/* <Footer /> */}
                            </>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default Login;
import React from 'react'
import './style.css'
class Topline extends React.Component {
    render() {
        return <div className='top-line df_jcsb ai_center wrapper_mid'>
            <div className='df   '>
                <img className='arrow' src={require('../img/phone.svg')} className='ai_center' />
                <p> 8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00   </p>
            </div>
            <div className='df  ai_center'>
                <img className='arrow' src={require('../img/login.svg')} className=' ' />
                <p>Войти / Регистрация</p>
            </div>
        </div>;
    }
}

export default Topline
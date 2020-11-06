import React from 'react'
import './style.css'
class SecondLine extends React.Component {
    render() {
        return <div className='component  second-line  df_jcsb ai_center wrapper_mid '>

            <button>
                <p className='left home_btn '>PORTEN</p>
            </button>
            <div className=' right df ai_center'>
                <button>Понравилось</button>
                <button>Личный кабинет</button>
                <button>Настройки</button>

                <button>
                    <img className='search' src={require('../img/search.svg')} className=' ' />
                </button>

                <button>
                    <img className='market' src={require('../img/market.svg')} className=' ' />
                </button>
            </div>
        </div>;
    }
}

export default SecondLine
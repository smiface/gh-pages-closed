import React from 'react'
import './style.css'

class Footer extends React.Component {
    render() {
        return <footer className='df_jcsb ai_center'>
            <div className='df_col'>
                <h3>О магазине</h3>
                <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
            </div>
            <div className='df_col'>
                <h3>Категории</h3>
                <div className='grid'>
                    <button>часы</button>
                    <button>браслеты</button>
                    <button>ремни</button>
                    <button>ювелирные изделия</button>
                    <button>запонки</button>
                </div>
            </div>
            <div className='df_col'>
                <h3>Рассылка</h3>
                <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                <div className='df feedback'>
                    <input placeholder='Ваша почта' />
                    <button> Подписаться </button>
                </div>
            </div>
        </footer>;
    }
}

export default Footer
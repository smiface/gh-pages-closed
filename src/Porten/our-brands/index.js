import React from 'react'
import './style.css'

class OurBrands extends React.Component {
    render() {
        return <div className='our-brands'>
            <div className='title df_col ai_center'>
                <h2>наши бренды</h2>
                <hr></hr>
                <div className='grid'>
                    <img src={require('../img/6.png')} />
                    <img src={require('../img/6.png')} />
                    <img src={require('../img/6.png')} />
                    <img src={require('../img/6.png')} />
                </div>
            </div>
        </div>;
    }
}

export default OurBrands
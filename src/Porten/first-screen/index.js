import React from 'react'
import './style.css'

class FirstScreen extends React.Component {
    render() {
        return <div className='component adapt first-screen'>

            <div className='wrapper df_col'>
                <div className='border df_col ta_center'>
                    <h2>Porten</h2>
                    <hr></hr>
                    <p>санкт-петербург</p>
                </div>
                <p className='about ta_center center m0a'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
            </div>

        </div>;
    }
}

export default FirstScreen
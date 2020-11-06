import React from 'react'
import './style.css'

class NewSeason extends React.Component {
    render() {
        return <div className='component new-season df'>
            <div className='left df_col jc_center ta_center ai_center'>
                {/* # */}
                <div className='title df_col ai_center'>
                    <h2>
                        СЕЗОН 2020/21
                </h2>
                    <hr></hr>
                </div>
                <div className='df_jcsb grid'>
                    <div className='watch_item ta_left'>
                        <div className='watch_bg df ai_center jc_center'>
                            <img src={require('../img/2.png')} />
                        </div>
                        <h3>Louis XVI ATHOS</h3>
                        <p>165 000 руб.  </p>
                    </div>
                    <div className='watch_item ta_left'>

                        <div className='watch_bg df ai_center jc_center'>
                            <img src={require('../img/2.png')} />
                        </div>
                        <h3>Louis XVI ATHOS</h3>
                        <p>165 000 руб.  </p>
                    </div>
                    <div className='watch_item ta_left'>

                        <div className='watch_bg df ai_center jc_center'>
                            <img src={require('../img/2.png')} />
                        </div>
                        <h3>Louis XVI ATHOS</h3>
                        <p>165 000 руб.  </p>
                    </div>
                </div>
            </div>
            <div className='right df_col ta_center ai_center'>
                {/* # */}
                <div className='title df_col ai_center'>
                    <h2>Новая коллекция</h2>
                    <hr></hr>
                </div>

                <button className='border df jc_center ai_center'>
                    <p className=''>Каталог</p>
                </button>
            </div>
        </div>;
    }
}

export default NewSeason
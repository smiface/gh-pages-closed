import React from 'react'
import './style.css'

class Collection2018 extends React.Component {
    render() {
        return <div className='component adapt collection-2018 df'>
            <div className='adapt left'>
                <img className='adapt' src={require('../img/5.jpg')} />
            </div>
            <div className='adapt right df_col ai_center ta_center jc_center'>
                
            <div className='title df_col ai_center'>
                <h2>коллекция 2018</h2>
                <hr></hr>
            </div>
            
                <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                <button className='border df jc_center ta_center ai_center'>
                    <p>посмотреть коллекцию</p>
                </button>
            </div>
        </div>;
    }
}

export default Collection2018
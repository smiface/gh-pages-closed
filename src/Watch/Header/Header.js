import React from 'react'
import './style.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            WatchAppSliderIndex: 0
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='watch_one'>
                <div className=''>
                    <nav className='header_nav wrapper'>
                        <img src={require('../img/k-logo-dark.png')}></img>
                        <nav>
                            <button>Overview</button>
                            <button>Design</button>
                            <button>Workout</button>
                            <button>Health</button>
                            <button>Activity</button>
                        </nav>
                        <button>
                            <img src={require('../img/search.png')}></img>
                        </button>
                    </nav>

                    <div className='slider'>
                        <button onClick={() => {
                            this.setState({
                                WatchAppSliderIndex: (this.state.WatchAppSliderIndex == 0) ? 2 : this.state.WatchAppSliderIndex - 1
                            }, () => {
                                if (this.state.WatchAppSliderIndex == 0) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '400px'
                                } else if (this.state.WatchAppSliderIndex == 1) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '-400px'
                                } else if (this.state.WatchAppSliderIndex == 2) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '-1200px'
                                }
                            });
                        }}> {'<'} </button>
                        <div className='slider_images'>
                            <img src={require('../img/watch_1.png')}></img>
                            <img src={require('../img/watch_2.png')}></img>
                            <img src={require('../img/watch_3.png')}></img>
                        </div>

                        <button onClick={() => {
                            this.setState({
                                WatchAppSliderIndex: (this.state.WatchAppSliderIndex == 2) ? 0 : this.state.WatchAppSliderIndex + 1
                            }, () => {
                                if (this.state.WatchAppSliderIndex == 0) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '400px'
                                } else if (this.state.WatchAppSliderIndex == 1) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '-400px'
                                } else if (this.state.WatchAppSliderIndex == 2) {
                                    document.querySelector('.slider_images').getElementsByTagName('img')[0].style.marginLeft = '-1200px'
                                }
                            });


                        }
                        }> {'>'} </button>
                    </div>

                </div>
            </div >



        )
    }

}
export default Header;
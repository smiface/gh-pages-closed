import React from 'react'
import './header.css'
import './mobile.css'

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

                <div className='slider section1'>
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

                <div className='section2'>
                    <div className='wrapper'>
                        <img src={require('../img/watch_4.png')} className='left'></img>

                        <div className='right'>
                            <h2>made to attract people</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani,.id.est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                            <div className='df '>
                                <button className='btn_black'>Find out more</button>
                                <button>Where to buy</button>
                            </div>

                            <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed* do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                        </div>
                    </div>
                </div>

                <div className='section3'>
                    <div className='df_col one'>
                        <div className='df ai_center'>
                            <img src={require('../img/k-logo-dark.png')}></img>
                            <p>SMARTWATCH</p>
                        </div>
                        <p>artificial intelligence 9</p>
                    </div>
                    <div className='df_col ai_center ta_center two'>
                        <h2>New design. To describe yourself.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='df'>
                            <a href='#'>Where to buy .. </a>
                            <a href='#'>Find out more .. </a>
                        </div>

                        <div className='grid'>
                            <div className='item df_col'>
                                <img src={require('../img/icon_1.png')} className='left'></img>
                                <h3>Built with Care</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_2.png')} className='left'></img>
                                <h3>Minimal Design</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_3.png')} className='left'></img>
                                <h3>Artificial Intelligence</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_4.png')} className='left'></img>
                                <h3>Easy to Carry</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_5.png')} className='left'></img>
                                <h3>Artificial Intelligence</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_6.png')} className='left'></img>
                                <h3>Easy to Carry</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_7.png')} className='left'></img>
                                <h3>Built with Care</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div className='item df_col'>
                                <img src={require('../img/icon_8.png')} className='left'></img>
                                <h3>Minimal Design</h3>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='section4'>
                    <div className='wrapper'>
                        <div className='df_col'>
                            <h3>minimal design.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. dolore magna aliqua. </p>
                            <button>Learn more</button>
                            <p>*Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                        </div>
                        <img src={require('../img/watch_5.png')} className=''></img>
                    </div>
                </div>

                <div className='section5'>
                    <div className='wrapper'>

                        <div className='df_col one'>
                            <div className='df ai_center mid'>
                                <img src={require('../img/k-logo-dark.png')}></img>
                                <p>SMARTWATCH</p>
                            </div>
                            <div className='mid'>
                                <p>artificial intelligence 9</p>
                            </div>
                        </div>

                        <div className='df_col ai_center ta_center two'>
                            <h2>New design. To describe yourself.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='df'>
                                <a href='#'>Where to buy .. </a>
                                <a href='#'>Find out more .. </a>
                            </div>

                            <div className='grid'>

                            </div>
                        </div>

                        <div className='grid'>
                            <div className='item df_col ai_center'>
                                <img src={require('../img/watch_6.png')} className=''></img>
                                <div className='df ai_center mid'>
                                    <img src={require('../img/k-logo-dark.png')}></img>
                                    <p>SMARTWATCH</p>
                                    <p>|</p>
                                    <p>Silver edition</p>
                                </div>
                                <a>Learn more .. </a>
                            </div>
                            <div className='item df_col ai_center'>
                                <img src={require('../img/watch_7.png')} className=''></img>
                                <div className='df ai_center mid'>
                                    <img src={require('../img/k-logo-dark.png')}></img>
                                    <p>SMARTWATCH</p>
                                    <p>|</p>
                                    <p>Silver edition</p>
                                </div>
                                <a>Learn more .. </a>
                            </div>
                            <div className='item df_col ai_center'>
                                <img src={require('../img/watch_8.png')} className=''></img>
                                <div className='df ai_center mid'>
                                    <img src={require('../img/k-logo-dark.png')}></img>
                                    <p>SMARTWATCH</p>
                                    <p>|</p>
                                    <p>Silver edition</p>
                                </div>
                                <a>Learn more .. </a>
                            </div>
                            <div className='item df_col ai_center'>
                                <img src={require('../img/watch_9.png')} className=''></img>
                                <div className='df ai_center mid'>
                                    <img src={require('../img/k-logo-dark.png')}></img>
                                    <p>SMARTWATCH</p>
                                    <p>|</p>
                                    <p>Silver edition</p>
                                </div>
                                <a>Learn more .. </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='section6'>
                    <div className='wrapper df_col jc_center ai_center'>
                        <h3>Just play. Have fun. Enjoy the game.</h3>
                        <p>- Michael Jordan</p>
                    </div>
                </div>

                <div className='section7'>
                    <img src={require('../img/watch_11.png')}></img>
                    <div className='wrapper df_col ai_center'>
                        <h3>Stay updated</h3>
                        <p className='ta_center'>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div className='df'>
                            <a href='#'>Where to buy .. </a>
                            <a href='#'>Find out more .. </a>
                        </div>
                        <div className='df'>
                            <input placeholder='Your email' type='email'></input>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

                <footer className='df_col ai_center'>

                    <div className='wrapper one'>
                        <p>Lorem</p>
                        <p>* This Demo is part of Kallyas Theme</p>
                        <p>Join 40.000+ Community members which already bought KALLYAS!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className='wrapper two'>
                        <hr></hr>
                    </div>
                    <div className='wrapper three'>
                        <div className='df_jcsb ai_center col-3'>
                            <img src={require('../img/k-logo-dark.png')}></img>
                            <p> > </p>
                            <p>Watch</p>
                            <p> > </p>
                            <p>Smartwatch AI 9</p>
                        </div>
                    </div>


                    <div className='wrapper four df_jcsb  '>
                        <div className='df_col'>
                            <a> <h4>Sections</h4></a>
                            <a><p>Overview</p></a>
                            <a><p>Design</p></a>
                            <a><p>Workout</p></a>
                            <a><p>Health</p></a>
                            <a><p>Activity</p></a>
                        </div>
                        <div className='df_col'>
                            <a> <h4>Sections</h4></a>
                            <a><p>Overview</p></a>
                            <a><p>Design</p></a>
                            <a><p>Workout</p></a>
                            <a><p>Health</p></a>
                            <a><p>Activity</p></a>
                        </div>
                        <div className='df_col'>
                            <a> <h4>Sections</h4></a>
                            <a><p>Overview</p></a>
                            <a><p>Design</p></a>
                            <a><p>Workout</p></a>
                            <a><p>Health</p></a>
                            <a><p>Activity</p></a>
                        </div>
                        <div className='df_col'>
                            <a> <h4>Sections</h4></a>
                            <a><p>Overview</p></a>
                            <a><p>Design</p></a>
                            <a><p>Workout</p></a>
                            <a><p>Health</p></a>
                            <a><p>Activity</p></a>
                        </div>
                        <div className='df_col'>
                            <a> <h4>Sections</h4></a>
                            <a><p>Overview</p></a>
                            <a><p>Design</p></a>
                            <a><p>Workout</p></a>
                            <a><p>Health</p></a>
                            <a><p>Activity</p></a>
                        </div>

                    </div>

                    <div className='wrapper five'>
                        <p>Where to buy : <a>Find a reseller.</a></p>
                    </div>


                    <div className='wrapper six'>
                        <hr></hr>
                    </div>

                    <div className='wrapper seven'>
                        <p>Hogash Studio 2019 @ All rights reserved.</p>
                    </div>


                </footer>

            </div >



        )
    }

}
export default Header;
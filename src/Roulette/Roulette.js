import React from 'react'
import Context from '../Barbershop/Components/Context'
import './style.css'
import roulette from './Roulette.png'

class Roulette extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        setTimeout(() => {

            let balance = 50000;
            let bet_sum = 0;
            let bet_win = 0;
            let bet_plus = 0;

            let bet_win_row = 0
            let bet_win_num = 0
            let bet_win_third = 0
            let bet_win_half = 0
            let bet_win_color = 0
            let bet_win_parity = 0

            let bet_number;
            let bet_number_sum;
            let bet_row;
            let bet_row_sum;
            let bet_third;
            let bet_third_sum;
            let bet_half;
            let bet_half_sum;
            let bet_color;
            let bet_color_sum;
            let bet_parity;
            let bet_parity_sum;
            let row;
            // очистить ставки
            function deleteBets() {
                bet_number = 'нет'
                bet_number_sum = 0
                bet_row = 'нет'
                bet_row_sum = 0
                bet_third = 'нет'
                bet_third_sum = 0
                bet_half = 'нет'
                bet_half_sum = 0
                bet_color = 'нет'
                bet_color_sum = 0
                bet_parity = 'нет'
                bet_parity_sum = 0

                bet_win_row = 0
                bet_win_num = 0
                bet_win_third = 0
                bet_win_half = 0
                bet_win_color = 0
                bet_win_parity = 0

                bet_sum = 0
                bet_win = 0
                bet_plus = 0
            }
            deleteBets()

            // показать баланс
            document.querySelector('.balance_number').innerHTML = balance

            // при нажатии на число
            document.querySelectorAll('.bet_number').forEach(element => {
                // при клике
                element.onclick = () => {
                    // задать значение цифрой
                    bet_number = element.innerHTML

                    if (bet_number == '') {
                        document.querySelector('.bet_number_display').innerHTML = ''
                    } else {
                        // вывести число
                        document.querySelector('.bet_number_display').innerHTML = bet_number
                    }

                    bet_number_sum = bet_sum
                    bet_sum = 0

                    // отобразить ставку на число
                    document.querySelector('.bet_number_display_sum').innerHTML = bet_number_sum
                }
            });

            // при нажатии на ряд
            document.querySelectorAll('.bets_row').forEach((element, index) => {
                element.onclick = () => {
                    // задать ставку на ряд
                    bet_row = index + 1

                    // вывести число
                    if (bet_row == '') {
                        document.querySelector('.bet_row_display').innerHTML = ''
                    } else {
                        document.querySelector('.bet_row_display').innerHTML = bet_row
                    }

                    bet_row_sum = bet_sum

                    // отобразить ставку на ряд
                    document.querySelector('.bet_row_display_sum').innerHTML = bet_row_sum
                }

            })

            // при нажатии на треть
            document.querySelectorAll('.bet_third').forEach((element, index) => {
                element.onclick = () => {
                    // выбрать треть
                    bet_third = index + 1

                    // показать треть
                    if (bet_third == '') {
                        document.querySelector('.bet_third_display').innerHTML = ''
                    } else {
                        document.querySelector('.bet_third_display').innerHTML = bet_third
                    }

                    bet_third_sum = bet_sum

                    // отобразить ставку на треть
                    document.querySelector('.bet_third_display_sum').innerHTML = bet_third_sum
                }
            })

            // при нажатии на половину
            document.querySelectorAll('.bet_half').forEach((element, index) => {
                element.onclick = () => {
                    // выбрать половину
                    bet_half = index + 1

                    // показать половину
                    if (bet_half == '') {
                        document.querySelector('.bet_half_display').innerHTML = ''
                    } else {
                        document.querySelector('.bet_half_display').innerHTML = bet_half
                    }

                    bet_half_sum = bet_sum
                    // отобразить ставку на половину
                    document.querySelector('.bet_half_display_sum').innerHTML = bet_half_sum
                }
            })

            //при нажатии на цвет
            document.querySelectorAll('.bet_color').forEach((element, index) => {
                element.onclick = () => {
                    // выбрать цвет
                    bet_color = index + 1

                    // показать цвет
                    if (bet_color == '') {
                        document.querySelector('.bet_color_display').innerHTML = ''
                    } else {
                        document.querySelector('.bet_color_display').innerHTML = bet_color
                    }

                    bet_color_sum = bet_sum
                    // отобразить ставку на цвет
                    document.querySelector('.bet_color_display_sum').innerHTML = bet_color_sum
                }
            })

            //при нажатии на четность
            document.querySelectorAll('.bet_parity').forEach((element, index) => {
                element.onclick = () => {
                    // выбрать четность
                    bet_parity = index + 1

                    // показать четность
                    if (bet_parity == '') {
                        document.querySelector('.bet_parity_display').innerHTML = ''
                    } else {
                        document.querySelector('.bet_parity_display').innerHTML = bet_parity
                    }

                    bet_parity_sum = bet_sum
                    // отобразить ставку на четность
                    document.querySelector('.bet_parity_display_sum').innerHTML = bet_parity_sum
                }
            })

            //при нажатии на сумму выбрать сумму
            document.querySelectorAll('.bet_size').forEach(element => {
                element.onclick = () => {
                    bet_sum = element.innerHTML
                }
            })

            // по кнопке снять ставки
            document.querySelector('.deleteBet').onclick = () => {
                deleteBets()
                resetDisplay()
            }

            //снять ставки с дисплея
            function resetDisplay() {
                document.querySelector('.bet_number_display').innerHTML = 'нет'
                document.querySelector('.bet_number_display_sum').innerHTML = bet_number_sum

                document.querySelector('.bet_row_display').innerHTML = 'нет'
                document.querySelector('.bet_row_display_sum').innerHTML = bet_row_sum

                document.querySelector('.bet_third_display').innerHTML = 'нет'
                document.querySelector('.bet_third_display_sum').innerHTML = bet_third_sum

                document.querySelector('.bet_half_display').innerHTML = 'нет'
                document.querySelector('.bet_half_display_sum').innerHTML = bet_half_sum

                document.querySelector('.bet_color_display').innerHTML = 'нет'
                document.querySelector('.bet_color_display_sum').innerHTML = bet_color_sum

                document.querySelector('.bet_parity_display').innerHTML = 'нет'
                document.querySelector('.bet_parity_display_sum').innerHTML = bet_parity_sum
            }
            resetDisplay()

            //зарандомить число
            function getNumber(min, max) {
                return (parseInt(Math.random() * (max - min) + min))
            }

            // закрутить рулетку
            function roll(x) {
                document.querySelector('.roulette').style.transform = 'rotate(' + x + 'deg)'

                setTimeout(() => {
                    document.querySelector('.roulette').style.transform = 'rotate(0deg)'
                    deleteBets()
                }, 3000);
            }

            // крутим рулетку
            document.querySelector('.roll').onclick = () => {

                //делаем кнопку неактивной
                document.querySelector(".roll").disabled = true;

                // рандомим число
                // #win
                const a = getNumber(0, 37)
                console.log(a)
                // let a = 8

                // крутим колесо на значение a
                switch (a) {
                    case 0: roll(360); break;
                    case 1: roll(130); break;
                    case 2: roll(300); break;
                    case 3: roll(20); break;
                    case 4: roll(320); break;
                    case 5: roll(170); break;
                    case 6: roll(255); break;
                    case 7: roll(55); break;
                    case 8: roll(200); break;
                    case 9: roll(96); break;
                    case 10: roll(180); break;
                    case 11: roll(220); break;
                    case 12: roll(40); break;
                    case 13: roll(235); break;
                    case 14: roll(115); break;
                    case 15: roll(340); break;
                    case 16: roll(150); break;
                    case 17: roll(285); break;
                    case 18: roll(80); break;
                    case 19: roll(330); break;
                    case 20: roll(125); break;
                    case 21: roll(310); break;
                    case 22: roll(85); break;
                    case 23: roll(190); break;
                    case 24: roll(160); break;
                    case 25: roll(290); break;
                    case 26: roll(10); break;
                    case 27: roll(245); break;
                    case 28: roll(45); break;
                    case 29: roll(70); break;
                    case 30: roll(210); break;
                    case 31: roll(105); break;
                    case 32: roll(350); break;
                    case 33: roll(140); break;
                    case 34: roll(275); break;
                    case 35: roll(30); break;
                    case 36: roll(230); break;
                    case 37: roll(265); break;
                }

                // проверяем ставку на число
                if (bet_number_sum > 0) {
                    //проверить число
                    if (a == bet_number) {
                        // console.log('угадал число')
                        if (a == 37) {
                            bet_win_num = (bet_number_sum * 100)
                        } else {
                            bet_win_num = (bet_number_sum * 38)
                        }
                    }
                }

                // проверяем ставку на ряд
                if (bet_row_sum > 0) {
                    if (a != 0 && a != 37) {
                        for (row = a; (row - 3 > 0); row = row - 3) {
                        }
                        if (row == bet_row) {
                            bet_win_row = bet_row_sum * 3
                        }
                    }
                }

                // проверяем ставку на треть
                if (bet_third_sum > 0) {
                    if (a != 0 && a != 37) {
                        if (12 * bet_third - 12 < a && 12 * bet_third > a) {
                            bet_win_third = bet_third_sum * 3
                        }
                    }
                }

                // проверяем половины
                if (bet_half_sum > 0) {
                    if (a != 0 && a != 37) {
                        if (bet_half == 1) {
                            (a < 18) ?
                                bet_win_half = bet_half_sum * 2
                                :
                                bet_win_half = 0
                        } else {
                            (a < 18) ?
                                bet_win_half = 0
                                :
                                bet_win_half = bet_half_sum * 2
                        }

                    } else {
                        console.log('x')
                    }

                }

                //проверяем цвет
                if (bet_color_sum > 0) {
                    if (a != 0 && a != 37) {

                        // если ставка на красное
                        if (bet_color == 1) {
                            if (a == 15 || a == 4 || a == 2 || a == 17 || a == 37 || a == 27 || a == 36 || a == 30 || a == 23 || a == 5 || a == 16 || a == 1 || a == 14 || a == 9 || a == 18 || a == 7 || a == 12 || a == 3) {
                                bet_win_color = bet_color_sum * 2
                            } else {
                                bet_win_color = 0
                            }
                            //если не на красное
                        } else {
                            if (a == 15 || a == 4 || a == 2 || a == 17 || a == 37 || a == 27 || a == 36 || a == 30 || a == 23 || a == 5 || a == 16 || a == 1 || a == 14 || a == 9 || a == 18 || a == 7 || a == 12 || a == 3) {

                                bet_win_color = 0
                            } else {
                                bet_win_color = bet_color_sum * 2
                            }
                        }


                    }
                }



                //проверяем четность
                if (bet_parity_sum > 0) {
                    if (a != 0 && a != 37) {
                        (bet_parity == 1) ?
                            ((a % 2 != 0) ?
                                bet_win_parity = 0
                                :
                                bet_win_parity = bet_parity_sum * 2) :
                            ((a % 2 == 0) ?
                                bet_win_parity = 0
                                :
                                bet_win_parity = bet_parity_sum * 2)
                    }
                }

                bet_sum =
                    Number(bet_number_sum) +
                    Number(bet_row_sum) +
                    Number(bet_third_sum) +
                    Number(bet_half_sum) +
                    Number(bet_color_sum) +
                    Number(bet_parity_sum)

                bet_win =
                    Number(bet_win_num) +
                    Number(bet_win_row) +
                    Number(bet_win_third) +
                    Number(bet_win_half) +
                    Number(bet_win_color) +
                    Number(bet_win_parity)


                bet_plus = bet_win - bet_sum
                balance = balance + bet_plus

                //делаем кнопку активной
                setTimeout(() => {
                    document.querySelector(".roll").disabled = false;
                    console.log(a)
                    // показать баланс
                    document.querySelector('.balance_number').innerHTML = balance

                    //очистить ставки и ставки на дисплее
                    deleteBets()
                    resetDisplay()
                }, 4000);

            }
        }, 1);
    }

    render() {
        return (
            <Context.Consumer>
                {(Context) => {
                    return (
                        // <div className={(Context.darkmode ? "roulette_dark" : "roulette_light")}>
                        <div className={(Context.darkmode ? "roulette_dark" : "roulette_light")}>
                            <span className={"roulette_main"}>

                                <div className="df_col roulette_item">
                                    <button type="button" className="roll">Roll</button>
                                    <img className='arrow' src={require('./Arrow.png')} />
                                    <img className='roulette' src={roulette} />
                                    <div className="balance df_jcsb center">
                                        <div >BALANCE⠀:⠀</div>
                                        <div className="balance_number"></div>
                                    </div>
                                </div>

                                {/* #2 */}
                                <div className='tables'>
                                    <div className='zeros'>
                                        <button className='zero'>0</button>
                                        <button className='zero'>37</button>
                                    </div>

                                    <div className='bets_numbers_both' >
                                        <div className='bets_numbers'>
                                            <button className='bet_number red'>1</button>
                                            <button className='bet_number red'>2</button>
                                            <button className='bet_number red'>3</button>
                                            <button className='bet_number red'>4</button>
                                            <button className='bet_number red'>5</button>
                                            <button className='bet_number black'>6</button>
                                            <button className='bet_number red'>7</button>
                                            <button className='bet_number black'>8</button>
                                            <button className='bet_number red'>9</button>
                                            <button className='bet_number black'>10</button>
                                            <button className='bet_number black'>11</button>
                                            <button className='bet_number red'>12</button>
                                            <button className='bet_number black'>13</button>
                                            <button className='bet_number red'>14</button>
                                            <button className='bet_number red'>15</button>
                                            <button className='bet_number red'>16</button>
                                            <button className='bet_number red'>17</button>
                                            <button className='bet_number red'>18</button>
                                        </div >
                                        <div className='bets_numbers'>
                                            <button className='bet_number black'>19</button>
                                            <button className='bet_number black'>20</button>
                                            <button className='bet_number black'>21</button>
                                            <button className='bet_number black'>22</button>
                                            <button className='bet_number black'>23</button>
                                            <button className='bet_number black'>24</button>
                                            <button className='bet_number black'>25</button>
                                            <button className='bet_number black'>26</button>
                                            <button className='bet_number red'>27</button>
                                            <button className='bet_number black'>28</button>
                                            <button className='bet_number black'>29</button>
                                            <button className='bet_number red'>30</button>
                                            <button className='bet_number black'>31</button>
                                            <button className='bet_number red'>32</button>
                                            <button className='bet_number black'>33</button>
                                            <button className='bet_number black'>34</button>
                                            <button className='bet_number black'>35</button>
                                            <button className='bet_number red'>36</button>
                                        </div>
                                        <table className='"bets_rows'>
                                            <tr>
                                                <td><button className="bets_row" id="x">2 to 1</button></td>
                                            </tr>
                                            <tr>
                                                <td><button className="bets_row">2 to 1</button></td>
                                            </tr>
                                            <tr>
                                                <td><button className="bets_row">2 to 1</button></td>
                                            </tr>

                                        </table>
                                    </div>



                                    <table className='bets_types'>
                                        <tr className='bets_thirds'>
                                            <td colspan="2"><button className="bet_third">1nd 12</button></td>
                                            <td colspan="2"><button className="bet_third">2nd 12</button></td>
                                            <td colspan="2"><button className="bet_third">3nd 12</button></td>
                                        </tr>

                                        <tr className="bets_another">
                                            <td ><button className="bet_half">1-18</button></td>
                                            <td><button className="bet_parity">Even</button></td>
                                            <td><button className="bet_color red">Red</button></td>
                                            <td><button className="bet_color">Black</button></td>
                                            <td><button className="bet_parity">Odd</button></td>
                                            <td><button className="bet_half">19-36</button></td>
                                        </tr>
                                    </table>

                                    <table className="bets_sizes">
                                        <tr>
                                            <td><button className="bet_size">250</button></td>
                                            <td><button className="bet_size">500</button></td>
                                            <td><button className="bet_size">1000</button></td>
                                            <td><button className="bet_size">2000</button></td>
                                        </tr>
                                        <tr>
                                            <td><button className="bet_size">4000</button></td>
                                            <td><button className="bet_size">8000</button></td>
                                            <td><button className="bet_size">16000</button></td>
                                            <td> <button className="bet_size">32000</button></td>
                                        </tr>
                                        <tr>
                                            <td><button className="bet_size">64000</button></td>
                                            <td><button className="bet_size">128000</button></td>
                                            <td><button className="bet_size">256000</button></td>
                                            <td><button className="bet_size">512000</button></td>
                                        </tr>
                                        <tr>
                                            <td><button className="bet_size">1024000</button></td>
                                            <td><button className="bet_size">2048000</button></td>
                                            <td><button className="bet_size">4096000</button></td>
                                            <td><button className="bet_size">8192000</button></td>
                                        </tr>
                                    </table >

                                    <table className="bets_display">
                                        <tr>
                                            <td><button className='deleteBet'><p>RESET BETS</p></button></td>
                                            <td><p> NUMBER</p></td>
                                            <td><p>ROW</p></td>
                                            <td><p>THIRD</p></td>
                                            <td><p>HALF</p></td>
                                            <td><p>COLOR </p></td>
                                            <td><p>PARITY </p></td>
                                        </tr>
                                        <tr>
                                            <td><p>На что ставка : </p></td>
                                            <td><p className="bet_number_display"> нет </p></td>
                                            <td><p className="bet_row_display">нет</p></td>
                                            <td><p className="bet_third_display">нет</p></td>
                                            <td><p className="bet_half_display">нет</p></td>
                                            <td><p className="bet_color_display">нет</p></td>
                                            <td><p className="bet_parity_display">нет</p></td>

                                        </tr>
                                        <tr>
                                            <td><p>Сколько : </p></td>
                                            <td><p className="bet_number_display_sum">0</p></td>
                                            <td><p className="bet_row_display_sum">0</p></td>
                                            <td><p className="bet_third_display_sum">0</p></td>
                                            <td><p className="bet_half_display_sum">0</p></td>
                                            <td><p className="bet_color_display_sum">0</p></td>
                                            <td><p className="bet_parity_display_sum">0</p></td>
                                        </tr>

                                    </table>

                                </div>

                            </span >
                        </div>


                    )

                }}

            </Context.Consumer >
        )
    }

}

export default Roulette;

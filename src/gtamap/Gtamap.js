import React from 'react'
import './style.css'


class Gtamap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        let homesWrapper = document.querySelector('.homes_wrapper')
        let homeWrapper = document.querySelector('.home_wrapper')
        let homeAbout = document.querySelector('.home_about')
        let homeAboutDefault;

        let data = [
            {
                owner: 'Gramm',
                about: 'Срочно !!! рядом с болькой , центр города',
                cars: 3,
                price: 30000,
                posX: '950px',
                posY: '1900px',
            },
            {
                owner: 'Sleep7tyle',
                about: 'Продам дом',
                cars: 2,
                price: 65000,
                posX: '900px',
                posY: '2230px'
            },
            {
                owner: 'Lilagi',
                about: '  Продам дом, Месторасположение: VineWood, Басейн, Есть место куда поставить машины, Оплачен на месяц  ',
                cars: 2,
                price: 1200000,
                posX: '800px',
                posY: '1770px'
            },
        ]

        function AddHomeFunctional() {
            let isAddHomeShow = false;
            let AddBtnText = 'Добавить дом'
            let AddHomeBtn = document.querySelector('.add_home_btn')
            let AddHomeCancelBtn = document.querySelector('.add_home_cancel')
            let AddHomeInfo = document.querySelector('.add_home_info')

            AddHomeBtn.innerHTML = AddBtnText
            AddHomeBtn.onclick = () => {
                ChangeAddHome()
                data.push(
                    {
                        owner: '123',
                        about: '  Продам дом, Месторасположение: VineWood, Басейн, Есть место куда поставить машины, Оплачен на месяц  ',
                        cars: 2,
                        price: 1200000,
                        posX: '700px',
                        posY: '1700px'
                    }
                )
                console.log(data)
            }

            AddHomeCancelBtn.onclick = () => ChangeAddHome()

            function ChangeAddHome(value) {
                let addHomeCancel = document.querySelector('.add_home_cancel')
                isAddHomeShow = !isAddHomeShow;
                isAddHomeShow ? AddHomeBtn.innerHTML = 'Разместить объявление' : AddHomeBtn.innerHTML = 'Добавить дом'
                isAddHomeShow ? addHomeCancel.style = 'display: flex' : addHomeCancel.style = 'display: none'
                isAddHomeShow ? AddHomeInfo.style = 'display: grid' : AddHomeInfo.style = 'display: none'
                Promise.resolve().then(() => ShowHomesFunctional())

                console.log(isAddHomeShow)
            }
        }
        AddHomeFunctional()

        function ShowHomesFunctional() {
            data.forEach((element, index) => {

                element.id = index;

                let homeWrapper = document.createElement('div')
                homeWrapper.className = 'home_wrapper'
                homeWrapper.style.left = data[index].posX
                homeWrapper.style.top = data[index].posY
                homesWrapper.prepend(homeWrapper)

                let homeIcon = document.createElement('img')
                homeIcon.className = 'homeImg'
                homeIcon.innerHTML = ''
                homeIcon.src = 'https://cdn.discordapp.com/attachments/368900261852217347/740210977328463912/house-icon.png'
                setInterval(() => {
                    homeIcon.src = 'https://cdn.discordapp.com/attachments/368900261852217347/740210978322382888/house-icon2.png'
                    setTimeout(() => {
                        homeIcon.src = 'https://cdn.discordapp.com/attachments/368900261852217347/740210977328463912/house-icon.png'
                    }, 500);
                }, 1000);
                homeWrapper.prepend(homeIcon)

                homeIcon.onclick = () => {
                    document.querySelector('.home_about').innerHTML = '<p> ' + data[index].owner + '</p>';
                    document.querySelector('.home_about').innerHTML += '</br>'
                    document.querySelector('.home_about').innerHTML += '<p> ' + data[index].about + '</p';
                    document.querySelector('.home_about').innerHTML += '</br>'
                    document.querySelector('.home_about').innerHTML += '<p> ' + data[index].price + '$' + '</p';
                    document.querySelector('.home_about').innerHTML += '</br>'
                    document.querySelector('.home_about').innerHTML += '<p> ' + data[index].cars + 'ГМ' + '</p>';
                }
            })
        }
        ShowHomesFunctional()

        //

        let ownerInput = document.querySelector('.owner')
        let aboutInput = document.querySelector('.about')
        let carsInput = document.querySelector('.cars')
        let priceInput = document.querySelector('.price')
        let posXInput = document.querySelector('.posX')
        let posYInput = document.querySelector('.posY')

        posXInput.onchange=()=>{
            console.log(posXInput.value)
            data[data.length-2].posX = posXInput.value + 'px'
            ShowHomesFunctional()
        }
            





        // // что в фильтре
        // let filterEl = document.querySelector('.filter')

        // let filterPriceMin = document.querySelector('.filterPriceMin')
        // let filterPriceMinInput = document.querySelector('.filterPriceMinInput')

        // let filterPriceMax = document.querySelector('.filterPriceMax')
        // let filterPriceMaxInput = document.querySelector('.filterPriceMaxInput')

        // filterPriceMinInput.onсlick = () => filterPriceMin.innerHTML = filterPriceMinInput.value
        // filterPriceMaxInput.onсlick = () => filterPriceMax.innerHTML = filterPriceMaxInput.value



    }

    render() {
        return (
            <div className='gtamap'>

                <div class="map_wrapper">

                    <div class="homes_wrapper">
                    </div>

                    <div class="home_about">
                        Информация о доме
                    </div>

                    <form className='add_home'>

                        <div className='add_home_info'>
                            <input class='owner' type='text' placeholder='Владелец'></input>
                            <input class='about' type='text' placeholder='О доме'></input>
                            <input class='cars' type='number' placeholder='Гаражные места'></input>
                            <input class='price' type='number' placeholder='Стоимость'></input>
                            <input class='posX' type='number' placeholder='Ширина'></input>
                            <input class='posY' type='number' placeholder='Высота'></input>
                        </div>

                        <div className='add_home_btn_wrapper'>
                            <button className='add_home_btn'>Добавить дом</button>
                            <button className='add_home_cancel' onclick={console.log(1)}> Отмена </button>
                        </div>
                    </form>


                    <img class="map" src="https://cdn.discordapp.com/attachments/368900261852217347/740210980939890718/gta5majestic.png" alt="" />


                </div>


            </div>

        )
    }

}

export default Gtamap;
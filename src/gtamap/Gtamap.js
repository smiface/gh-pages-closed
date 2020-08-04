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

        // что на карте
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
            <div>

                <div class="map_wrapper">

                    <div class="homes_wrapper">
                    </div>

                    <div class="home_about">
                        Информация о доме
                    </div>


                    <img class="map" src="https://cdn.discordapp.com/attachments/368900261852217347/740210980939890718/gta5majestic.png" alt="" />


                </div>

            </div>

        )
    }

}

export default Gtamap;
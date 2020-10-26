headerSearchHTML = `
<header class="header__search df">
    <div class="ai-center">
        <svg class="search-back-icon-self-28 arrow header__search__back__btn" viewBox="0 0 24 24" focusable="false">
            <path class="search-back-icon-path-29"
                d="M5.414 11H20.8c.663 0 1.2.448 1.2 1s-.537 1-1.2 1H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7A.997.997 0 0 1 2 12.001v-.002c0-.255.098-.511.293-.706l7-7a1 1 0 0 1 1.414 1.414L5.414 11z">
            </path>
        </svg>

        <input type="text" class="ta-left" placeholder="Найдите услугу: перевод на кошелек, билайн, стим...">
    </div>
    <button class="search__btn">☌</button>
</header>
`

headerHTML = `
<a href="">
    <img src="https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg" alt="" srcset="">
</a>
<a href="">Платежи и переводы</a>
<a href="">Банковские карты</a>
<a href="">Пополнение кошелька</a>
<a href="">Помощь</a>
<a href="">Еще…</a>
<button class="search__btn">☌</button>
<button class="create__pruse__btn">Создать кошелек</button>
<button class="login__btn" id='loginBtn'>Войти</button>
`

headerSearch = document.querySelector('.header__search')
searchBtn = document.querySelector('.search__btn')
searchBackBtn = document.querySelector('.header__search__back__btn')
// searchBtn.onclick = () => {
//     header.innerHTML = headerSearchHTML

//     document.querySelector('.header__search__back__btn').onclick = () => {
//         header.innerHTML = headerHTML
//     }

//     console.log(header)
// }

searchBtn.onclick = () => {
    let el = document.createElement('div')
    el.innerHTML = headerSearchHTML
    header.after(el)
    el.style.opacity = "1";

    const arrow = document.querySelector('.arrow')
    arrow.onclick = () => {
        el.remove()
    }
}

// document.querySelector('.arrow').onclick = () => {
//     headerSearch.remove()
//     console.log(1)
// }

// headerSearch.onclick = () => {
//     document.querySelector('.header__search__input').focus()
// }


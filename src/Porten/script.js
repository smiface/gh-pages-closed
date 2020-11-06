let components = document.querySelectorAll('.component')
let watches = document.querySelectorAll('.watch_bg')

window.addEventListener('scroll', function () {
    components.forEach((item, index) => {
        if (index > 1 && index < components.length - 1) {
            isAnyPartOfElementInViewport(item) ? item.style.opacity = '1' : item.style.opacity = '0.5'
        }
    })

    watches.forEach(item => {
        isAnyPartOfElementInViewport(item) ? item.style.marginTop = '0' : item.style.marginTop = '50px'
    })

    function isAnyPartOfElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const vertInView = (rect.top + 200 <= windowHeight) && ((rect.top - 200 + rect.height) >= 0);

        if (vertInView == true) {
            return true
        } else {
            return false
        }
    }
});




// var hiddenElement = document.getElementById("box");
// var btn = document.querySelector('.btn');

// function handleButtonClick() {
//    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
// }

// btn.addEventListener('click', handleButtonClick);
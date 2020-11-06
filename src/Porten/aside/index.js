import React from 'react'
import './style.css'

class Aside extends React.Component {

    componentDidMount() {
        let navBtns = document.querySelectorAll('.aside_navBtn')
        let components = document.querySelectorAll('.component')
        navBtns.forEach((item, index) => {

            function handleButtonClick() {
                components[index + 1].scrollIntoView({ block: "center", behavior: "smooth" });
            }

            item.addEventListener('click', handleButtonClick);
        })
    }

    render() {
        return <aside className='aside_navigation df_col ai_center'>
            <button className='aside_navBtn'>1</button>
            <button className='aside_navBtn'>2</button>
            <button className='aside_navBtn'>3</button>
            <button className='aside_navBtn'>4</button>
            <button className='aside_navBtn'>5</button>
            <button className='aside_navBtn'>6</button>
            <button className='aside_navBtn'>7</button>
        </aside>;
    }
}

export default Aside
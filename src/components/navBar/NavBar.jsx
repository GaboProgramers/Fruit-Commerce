import React from 'react'
import './navBar.css'
// React - Icons
import { GiFruitBowl } from 'react-icons/gi'
import { BiMenuAltLeft } from 'react-icons/bi'

const NavBar = () => {
    return (
        <nav>
            <a href="#"><BiMenuAltLeft className='icon-menu' /></a>
            <div className='link'>
                <GiFruitBowl className='icon' />
                <a href='#' className='text__link'>Descuentos</a>
            </div>
            <div className='link'>
                <GiFruitBowl className='icon' />
                <a href='#' className='text__link'>Fruit</a>
            </div>
            <div className='link'>
                <GiFruitBowl className='icon' />
                <a href='#' className='text__link'>Descuentos</a>
            </div>
            <div className='link'>
                <GiFruitBowl className='icon' />
                <a href='#' className='text__link'>Descuentos</a>
            </div>
        </nav>
    )
}

export default NavBar
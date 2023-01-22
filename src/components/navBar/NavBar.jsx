import React from 'react'
import './navBar.css'
// React - Icons
import { GiFruitBowl } from 'react-icons/gi'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'

const NavBar = () => {
    return (
        <nav>
            <div className='link'>
                <i className='bx bxs-discount icon'></i>
                <a href='#' className='text__link'>Descuentos</a>
            </div>
            <div className='link'>
                <FiClock className='icon' />
                <a href='#' className='text__link'>Horario</a>
            </div>
            <div className='link'>
                <i className='bx bx-purchase-tag-alt icon'></i>
                <a href='#' className='text__link'>Promociones</a>
            </div>
            <div className='link'>
                <GiFruitBowl className='icon' />
                <a href='#' className='text__link'>Undefine</a>
            </div>
        </nav>
    )
}

export default NavBar
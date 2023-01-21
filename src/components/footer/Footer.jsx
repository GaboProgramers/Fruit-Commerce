import React from 'react'
import './footer.css'
import { SiWhatsapp } from 'react-icons/si'
import { FiInstagram } from 'react-icons/fi'
import { TbBrandMeta } from 'react-icons/tb'

const Footer = () => {
    return (
        <footer className='footer'>
            <h2>Fruit's</h2>
            <div className='link__socials'>
                <a href="#"><SiWhatsapp className='icon-social' /></a>
                <a href="#"><FiInstagram className='icon-social' /></a>
                <a href="#"><TbBrandMeta className='icon-social' /></a>
            </div>
            <div className="copy">
                <span>&copy; Todos Los Derechos Recervados <br /><a href="#">Paper's Company</a> - 2023</span>
            </div>
        </footer>
    )
}

export default Footer
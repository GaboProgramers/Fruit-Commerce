import React from 'react'
import fruit from '../../jsonAppFruit/Frutas.json'
import './sectionDesplegable.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'
import ProductCard from '../productCard/ProductCard'

const SectionFrutas = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <article className="desplegable">
                <div className="desplegable__title" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className='title'>Frutas</h3>
                    <IoMdArrowDropdown className='icon' />
                </div>
                <div className={`fruit__container ${isOpen ? '' : 'open'}`}>
                    {
                        fruit.map(prodInfo => (
                            <ProductCard key={prodInfo.id} prodInfo={prodInfo} />
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export default SectionFrutas
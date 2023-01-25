import React from 'react'
import abarrotes from '../../jsonAppFruit/abarrotes.json'
import './sectionDesplegable.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'
import ProductCard from '../productCard/ProductCard'

const SectionAbarrotes = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <article className="desplegable">
                <div className="desplegable__title" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className='title'>Abarrotes</h3>
                    <IoMdArrowDropdown className='icon' />
                </div>
                <div className={`fruit__container ${isOpen ? '' : 'open'}`}>
                    {
                        abarrotes.map(prodInfo => (
                            <ProductCard
                                key={prodInfo.id}
                                prodInfo={prodInfo}
                            />
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export default SectionAbarrotes
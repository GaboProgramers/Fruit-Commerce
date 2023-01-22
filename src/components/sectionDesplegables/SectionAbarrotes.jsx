import React from 'react'
import abarrotes from '../../jsonAppFruit/abarrotes.json'
import './sectionDesplegable.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

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
                        abarrotes.map(abarr => (
                            <div className="fruit__card" key={abarr.id}>
                                <div className="fruit__image">
                                    <img src={abarr.img} alt={abarr.nombre} />
                                </div>
                                <div className="fruit__details">
                                    <div className='fruit__title-content'><span className='fruit__span'></span> <h3 className='title'>{abarr.nombre}</h3></div>
                                    <div><span className='fruit__span'>Precio: </span> <span className='status'>{abarr.precio}</span></div>
                                    <div><span className='fruit__span'>Kg: </span> <span className='status'>{abarr.kg}</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export default SectionAbarrotes
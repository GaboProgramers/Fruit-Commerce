import React from 'react'
import fruit from '../../jsonAppFruit/Frutas.json'
import './sectionDesplegable.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

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
                        fruit.map(frut => (
                            <div className="fruit__card" key={frut.id}>
                                <div className="fruit__image">
                                    <img src={frut.img} alt={frut.nombre} />
                                </div>
                                <div className="fruit__details">
                                    <div className='fruit__title-content'><span className='fruit__span'></span> <h3 className='title'>{frut.nombre}</h3></div>
                                    <div><span className='fruit__span'>Precio: </span> <span className='status'>{frut.precio}</span></div>
                                    <div><span className='fruit__span'>Kg: </span> <span className='status'>{frut.kg}</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export default SectionFrutas
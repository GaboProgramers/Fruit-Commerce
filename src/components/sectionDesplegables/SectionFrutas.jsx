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
                                    <h3 className='fruit__title'><span>Nombre: </span> {frut.nombre}</h3>
                                    <div><span>Precio: </span> {frut.precio}</div>
                                    <div><span>Kg: </span> {frut.kg}</div>
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
import React from 'react'
import verduras from '../../jsonAppFruit/verduras.json'
import './sectionDesplegable.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

const SectionVerduras = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <article className="desplegable">
                <div className="desplegable__title" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className='title'>Verduras</h3>
                    <IoMdArrowDropdown className='icon' />
                </div>
                <div className={`fruit__container ${isOpen ? '' : 'open'}`}>
                    {
                        verduras.map(ortalizas => (
                            <div className="fruit__card" key={ortalizas.id}>
                                <div className="fruit__image">
                                    <img src={ortalizas.img} alt={ortalizas.nombre} />
                                </div>
                                <div className="fruit__details">
                                    <h3 className='fruit__title'><span>Nombre: </span> {ortalizas.nombre}</h3>
                                    <div><span>Precio: </span> {ortalizas.precio}</div>
                                    <div><span>Kg: </span> {ortalizas.kg}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export default SectionVerduras
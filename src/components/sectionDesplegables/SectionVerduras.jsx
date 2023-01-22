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
                        verduras.map(hortalizas => (
                            <div className="fruit__card" key={hortalizas.id}>
                                <div className="fruit__image">
                                    <img src={hortalizas.img} alt={hortalizas.nombre} />
                                </div>
                                <div className="fruit__details">
                                    <div className='fruit__title-content'><span className='fruit__span'></span> <h3 className='title'>{hortalizas.nombre}</h3></div>
                                    <div><span className='fruit__span'>Precio: </span> <span className='status'>{hortalizas.precio}</span></div>
                                    <div><span className='fruit__span'>Kg: </span> <span className='status'>{hortalizas.kg}</span></div>
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
import React from 'react'
import { GoPlus } from 'react-icons/go'

const ProductCard = ({ prodInfo }) => {

    const handleClick = () => {

    }

    return (
        <div className="fruit__card" onClick={handleClick}>
            <div className="fruit__image">
                <img src={prodInfo.img} alt={prodInfo.nombre} />
            </div>
            <div className="fruit__details">
                <div className='fruit__title-content'><span className='fruit__span'></span> <h3 className='title'>{prodInfo.nombre}</h3></div>
                <div className="content__details">
                    <div className="details__description">
                        <div className='details_priceKG'> Precio:  <span className='fruit__span'> {prodInfo.precio}</span></div>
                        <div className='details_priceKG'> Kg:  <span className='fruit__span'> {prodInfo.kg}</span></div>
                    </div>
                    <button className='add-cart' title='addToCart'><GoPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
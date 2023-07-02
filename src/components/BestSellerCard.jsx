import React from 'react'
import product1 from '../assets/ptoduct (1).png';
import './BestSellerCard.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarRating from './StarRating';

const BestSellerCard = ({title="Claritias ASE SN",price=100,image,rating=4}) => {
  return (
    <div className='bestseller-card-container'>
        <img className="bestseller-product-image" src={image} alt="prod-image"/>
        <div className='bestseller-content-container'>
                <StarRating rating={rating} />
            <h4 className='bestseller-card-title'>{title}</h4>
            <p className='bestseller-card-price'>₹{price}.00</p>
        </div>
    </div>
  )
}

export default BestSellerCard;
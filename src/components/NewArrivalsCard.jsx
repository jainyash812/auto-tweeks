import React from 'react'
import product1 from '../assets/ptoduct (1).png';
import './NewArrivalsCard.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarRating from './StarRating';

const NewArrivalsCard = ({title,price=100,image,rating=4}) => {
  return (
    <div className='newarrivals-card-container'>
        <img className="newarrivals-product-image" src={image} alt="prod-image"/>
        <div className='newarrivals-content-container'>
                <StarRating rating={rating} />
            <h4 className='newarrivals-card-title'>{title}</h4>
            <p className='newarrivals-card-price'>₹{price}.00</p>
            <button className='newarrivals-btn'><AiOutlineShoppingCart/> Add to Card </button>
        </div>
    </div>
  )
}

export default NewArrivalsCard
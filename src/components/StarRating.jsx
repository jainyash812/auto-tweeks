import React, { useState,useEffect } from "react";
const StarRating = ({rating}) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <span key={`${star}${index}`} style={index<=rating?{color:'#fecd06'}:{}}>&#9733;</span>
          );
        })}
      </div>
    );
  };
export default StarRating;
import React from "react";
import NewArrivalsCarousel from "../../components/NewArrivalsCarousel";

const NewArrivals = () => {
  return (
    <div className="new-arrivals-container" style={{paddingBottom:'2rem',marginTop:'3rem'}}>
        <div className="new-arrivals-heading-container">
            <h2 style={{textAlign:'center'}}>&#10017; New Arrivals &#10017;</h2>
        </div>
      <div className="new-arrivals-carousel" style={{margin:'0 2rem'}}>
        <NewArrivalsCarousel />
      </div>
    </div>
  );
};

export default NewArrivals;

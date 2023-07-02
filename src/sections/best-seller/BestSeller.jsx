import React, { useEffect, useState } from "react";
import BestSellerCard from "../../components/BestSellerCard";
import prod1 from '../../assets/ptoduct (1).png';
import './BestSeller.css';
import BestSellersCarousel from "../../components/BestSellerCarousel";
const BestSeller = () => {
  const [isMobile,setIsMobile]=useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    console.log('windowWidth',windowWidth);
    window.addEventListener('resize', setWindowDimensions);
    if(window.innerWidth<=925){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [windowWidth])
  return (
    <div className="best-sellers-container">
        <div className="best-sellers-heading-container">
            <h2 style={{textAlign:'center',color:'white'}}>&#10017; Best Arrivals &#10017;</h2>
        </div>
        {isMobile?<><BestSellersCarousel /></>: <div className="best-sellers-wrapper">
        <BestSellerCard image={prod1} />
        <BestSellerCard image={prod1} />
        <BestSellerCard image={prod1} />
        <BestSellerCard image={prod1} />
        <BestSellerCard image={prod1} />
        <BestSellerCard image={prod1} /></div>}
    </div>
  );
};

export default BestSeller;

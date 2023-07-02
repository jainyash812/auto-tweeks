import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import './BestSellersCarousel.css'
import product1 from '../assets/ptoduct (1).png';
import product2 from '../assets/ptoduct (2).png';
import product3 from '../assets/ptoduct (3).png';
import product4 from '../assets/ptoduct (4).png';
import BestSellerCard from './BestSellerCard';

function BestSellersCarousel() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
          //partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 1024, min: 900 },
          items: 3,
          //partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 900, min: 664 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2,
        }
      };
  return (
    <Carousel infinite responsive={responsive} removeArrowOnDeviceType={["tablet","mobile"]} swipeable>
        <BestSellerCard title="Product 1" image={product1} rating={4} />
        <BestSellerCard title="Product 2" image={product2} rating={1} />
        <BestSellerCard title="Product 3" image={product3} rating={5} />
        <BestSellerCard title="Product 4" image={product4} rating={0} />
        <BestSellerCard title="Product 5" image={product1} rating={2} />
        <BestSellerCard title="Product 6" image={product2} rating={3} />
        <BestSellerCard title="Product 7" image={product3} rating={1} />
        <BestSellerCard title="Product 8" image={product4} rating={0} />
        <BestSellerCard title="Product 9" image={product1} rating={5} />
        <BestSellerCard title="Product 10" image={product2} rating={2} />
    </Carousel>
  );
}

export default BestSellersCarousel;

import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewArrivalsCard from './NewArrivalsCard';
import './NewArrivalsCarousel.css'
import product1 from '../assets/ptoduct (1).png';
import product2 from '../assets/ptoduct (2).png';
import product3 from '../assets/ptoduct (3).png';
import product4 from '../assets/ptoduct (4).png';

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//     const { carouselState: { currentSlide } } = rest;
//     return (
//       <div className="carousel-button-group">
//         <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >Prev</button>
//         <button onClick={() => next()} ></button>
//         <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>
//       </div>
//     );
//   };
function NewArrivalsCarousel() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          //partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 1024, min: 1168 },
          items: 3,
          //partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1168, min: 800 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 800, min: 616 },
          items: 3
        },
        mobile1: {
          breakpoint: { max: 616, min: 0 },
          items: 2,
        }
      };
    // const [isMobile,setIsMobile] = useState(false)
    // useEffect(()=>{
    //     if(window.navigator.userAgent.match(/Android/i)){
    //         setIsMobile(true);
    //     }
    // },[isMobile])
    //showDots={isMobile} swipeable={isMobile}
  return (
    <Carousel infinite responsive={responsive} removeArrowOnDeviceType={["mobile"]} swipeable>
        <NewArrivalsCard title="Product 1" image={product1} rating={4} />
        <NewArrivalsCard title="Product 2" image={product2} rating={1} />
        <NewArrivalsCard title="Product 3" image={product3} rating={5} />
        <NewArrivalsCard title="Product 4" image={product4} rating={0} />
        <NewArrivalsCard title="Product 5" image={product1} rating={2} />
        <NewArrivalsCard title="Product 6" image={product2} rating={3} />
        <NewArrivalsCard title="Product 7" image={product3} rating={1} />
        <NewArrivalsCard title="Product 8" image={product4} rating={0} />
        <NewArrivalsCard title="Product 9" image={product1} rating={5} />
        <NewArrivalsCard title="Product 10" image={product2} rating={2} />
    </Carousel>
  );
}

export default NewArrivalsCarousel;

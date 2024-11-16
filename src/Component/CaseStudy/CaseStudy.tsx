
/** @format */

import { FaArrowRightLong } from "react-icons/fa6";
import "./CaseStudy.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxArrowTopRight } from "react-icons/rx";
const CaseStudy = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
  const data = [
    {
      
      img: `/public/Frame 603.png`,
      
    },
    {
      
      img: `public/Frame 602.png`,
      
    },
    
    {
      
      img: `public/Frame 603.png`,
     
    },
    {
     
      img: `public/Frame 602.png`,
     
    },
    
  ];
  return (
    <div className='main-blogs-container'>
      <div className='blogs-title'>
        <h2>Case Study</h2>
        <p>We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.</p>
        <button className="view">
        View All
        <FaArrowRightLong />
        </button>
      </div>
      <div className='w-3/4 m-auto main-bg-card'>
        <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='blogs-card-content'>
              <div className='my-img-blogs'>
                <img src={d.img} alt='' />
              </div>
              {/* <div className='my-text-blogs'>
                <h3>{d.area}</h3>
                <h1>{d.heading}</h1>
                <p>{d.msg}</p>
                <button className='read'>
                  Read more
                  <RxArrowTopRight />
                </button>
              </div> */}
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

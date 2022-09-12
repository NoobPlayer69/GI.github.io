import React from 'react';
import pic1 from './Visuals/Blog/1.png';
import pic2 from './Visuals/Blog/2.png';
import pic3 from './Visuals/Blog/3.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

function ImageSlider() {
  return (
    <><div>Hello</div><>
    <div className='flex align-items-centre justify-items-center'>
      <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                        
                     <img
                        className="object-fill w-full h-96 "
                        src={pic1}
                        alt="image slide 1"
                     />
                     <p>Lorem24

                     </p>
                    
                    
                    <Link to ='/Blog/Blog1'>
                    <button className='bg-slate-500  '>Hello</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                
                    <img
                        className="object-fill w-full h-96"
                        src={pic2}
                        alt="image slide 2"
                    />
                    
                   
                    <Link to ='/Blog/Blog2'>
                    <button className='bg-slate-500'>Hello</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                
                    <img
                        className="object-fill w-full h-96"
                        src={pic3}
                        alt="image slide 3"
                    />
                    <Link to ='/Blog/Blog3'>
                    <button className='bg-slate-500'>Hello</button>
                    </Link>
                </SwiperSlide>
            </Swiper>
            </div>
    </></>
  )
}

export default ImageSlider
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
        <><>
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
                    <SwiperSlide >

                        <div className='relative' style={{ backgroundImage: `url(${pic1})`, backgroundRepeat: 'no-repeat', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <p className='text-7xl flex justify-center text-white'>Blog Name</p>
                            <br/>
                            <p className='flex justify-center text-2xl'>Writer's Name</p>
                            <br/>
                            <p className='flex justify-center'>9th December, 2001</p>

                            


                            <Link to='/Blog/Blog1'>
                                <button className='bg-amber-900  text-2xl rounded-lg bottom-0 left-0 absolute mb-20 ml-20'><p className='ml-2 mr-2 font-bold '>Read More</p></button>
                            </Link></div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative' style={{ backgroundImage: `url(${pic2})`, backgroundRepeat: 'no-repeat', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <p className='text-7xl flex justify-center text-white'>Blog Name</p>
                            <br/>
                            <p className='flex justify-center text-2xl'>Writer's Name</p>
                            <br/>
                            <p className='flex justify-center'>14th August, 2000</p>
                            <Link to='/Blog/Blog2'>
                                <button className='bg-amber-900 text-2xl rounded-lg bottom-0 left-0 absolute mb-20 ml-20'><p className='ml-2 mr-2 font-bold'>Read More</p></button>
                            </Link>
                        </div>




                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative' style={{ backgroundImage: `url(${pic3})`, backgroundRepeat: 'no-repeat', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <p className='text-7xl flex justify-center text-white'>Blog Name</p>
                            <br/>
                            <p className='flex justify-center text-2xl'>Writer's Name</p>
                            <br/>
                            <p className='flex justify-center'>16th August, 2001</p>
                            <Link to='/Blog/Blog3'>
                                <button className='bg-amber-900 text-2xl rounded-lg bottom-0 left-0 absolute mb-20 ml-20'><p className='ml-2 mr-2 font-bold'>Read More</p></button>
                            </Link></div>


                    </SwiperSlide>
                </Swiper>
            </div>
        </></>
    )
}

export default ImageSlider
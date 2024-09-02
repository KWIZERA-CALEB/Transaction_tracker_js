import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay,  Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const Hero = () => {
  return (
    <div>
        <Swiper modules={[Pagination, Autoplay, Navigation]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} navigation pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1}>
            <SwiperSlide className='h-[600px] w-full cursor-pointer'>
                <div className='w-full h-full relative'>
                    <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center' alt="Title for event" />
                    <div className='w-full h-full flex items-end absolute pl-[25px] pb-[40px] top-0 right-0 left-0 bottom-0 bg-blue-300/[40%]'>
                        <div className='w-[500px]'>
                            <p className='poppinsBold text-[#fff] select-none text-[28px] text-start'>A world of Knowledge and Oportunity.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-[600px] w-full cursor-pointer'>
                <div className='w-full h-full relative'>
                    <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center' alt="Title for event" />
                    <div className='w-full h-full flex items-end absolute pl-[25px] pb-[40px] top-0 right-0 left-0 bottom-0 bg-blue-300/[40%]'>
                        <div className='w-[500px]'>
                            <p className='poppinsBold text-[#fff] select-none text-[28px] text-start'>Opening doors to Brighter Future.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-[600px] w-full cursor-pointer'>
                <div className='w-full h-full relative'>
                    <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center' alt="Title for event" />
                    <div className='w-full h-full flex items-end absolute pl-[25px] pb-[40px]  top-0 right-0 left-0 bottom-0 bg-blue-300/[40%]'>
                        <div className='w-[500px]'>
                            <p className='poppinsBold text-[#fff] select-none text-[28px] text-start'>A world of Knowledge and Oportunity.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero

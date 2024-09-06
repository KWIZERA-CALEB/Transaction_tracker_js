import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/molecules/Navigation'
import Footer from '../components/molecules/Footer'

const Academics = () => {
  return (
    <>
      <Helmet>
        <title>Academics</title>
      </Helmet>
      <Navigation />
      <div className='mb-[30px] relative'>
        <img src="/images/banner1.jfif" className='w-full h-[400px] object-cover object-center' alt="Banner School Updates" />
        <div className='absolute flex inset-0 items-center justify-center'>
            <p className='poppinsBold text-[#fff] select-none text-[18px] md:text-[28px] text-start'>Academics.</p>
        </div>
      </div>
      <div>
        <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>A hub of intellectual challenge</p></div>
        <div className='w-full pr-[15px] pl-[15px] md:pr-[80px] md:pl-[80px] flex justify-center'>
          <p className='poppinsMedium text-[12px] cursor-pointer text-center'>GSO Butare nurtures a lasting passion for learning among its students. A welcoming atmosphere, top-notch amenities, and dedicated educators offer the framework and encouragement necessary for every student to thrive in this academically stimulating setting, equipping them aptly for higher education and beyond.</p>
        </div>
      </div>

      <div className='mt-[30px]'>
        <div className='pr-[25px] pl-[25px]'>
          <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Combinations</p></div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>

            <div className='rounded-[20px] border-slate-200 border-solid border-[2px]'>
              <div>
                <img src="/images/banner1.jfif" className='w-full h-[170px] object-cover object-center rounded-[20px]' alt="MPC" />
              </div>
              <div className='p-[20px]'><p className='poppinsBold text-[15px] cursor-pointer'>MPC</p></div>
            </div>
            <div className='rounded-[20px] border-slate-200 border-solid border-[2px]'>
              <div>
                <img src="/images/banner1.jfif" className='w-full h-[170px] object-cover object-center rounded-[20px]' alt="MPC" />
              </div>
              <div className='p-[20px]'><p className='poppinsBold text-[15px] cursor-pointer'>PCM</p></div>
            </div>
            <div className='rounded-[20px] border-slate-200 border-solid border-[2px]'>
              <div>
                <img src="/images/banner1.jfif" className='w-full h-[170px] object-cover object-center rounded-[20px]' alt="MPC" />
              </div>
              <div className='p-[20px]'><p className='poppinsBold text-[15px] cursor-pointer'>PCB</p></div>
            </div>
            <div className='rounded-[20px] border-slate-200 border-solid border-[2px]'>
              <div>
                <img src="/images/banner1.jfif" className='w-full h-[170px] object-cover object-center rounded-[20px]' alt="MPC" />
              </div>
              <div className='p-[20px]'><p className='poppinsBold text-[15px] cursor-pointer'>ANP</p></div>
            </div>
            <div className='rounded-[20px] border-slate-200 border-solid border-[2px]'>
              <div>
                <img src="/images/banner1.jfif" className='w-full h-[170px] object-cover object-center rounded-[20px]' alt="MPC" />
              </div>
              <div className='p-[20px]'><p className='poppinsBold text-[15px] cursor-pointer'>MCB</p></div>
            </div>

            
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Academics

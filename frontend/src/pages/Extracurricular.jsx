import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/molecules/Navigation'
import Footer from '../components/molecules/Footer'

const Extracurricular = () => {
  return (
    <>
      <Helmet>
        <title>Extracurricular</title>
      </Helmet>
      <Navigation />
      <div className='mb-[30px] relative'>
        <img src="/images/banner1.jfif" className='w-full h-[400px] object-cover object-center' alt="Banner School Updates" />
        <div className='absolute flex inset-0 items-center justify-center'>
            <p className='poppinsBold text-[#fff] select-none text-[18px] md:text-[28px] text-start'>Extracurricular.</p>
        </div>
      </div>

      <div className='mt-[30px]'>
        <div className='pr-[25px] pl-[25px]'>
          <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Sports</p></div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>
            <div className='rounded-full border-slate-200 border-solid border-[2px] p-[20px]'></div>
            <div className='rounded-full border-slate-200 border-solid border-[2px] p-[20px]'></div>
            <div className='rounded-full border-slate-200 border-solid border-[2px] p-[20px]'></div>
            <div className='rounded-full border-slate-200 border-solid border-[2px] p-[20px]'></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Extracurricular

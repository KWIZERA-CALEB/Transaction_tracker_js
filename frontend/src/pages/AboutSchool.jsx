import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/molecules/Navigation'
import Footer from '../components/molecules/Footer'
import About from '../components/organisms/About'

const AboutSchool = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Navigation />
      <div className='mb-[30px] relative'>
        <img src="/images/banner1.jfif" className='w-full h-[400px] object-cover object-center' alt="Banner School Updates" />
        <div className='absolute flex inset-0 items-center justify-center'>
            <p className='poppinsBold text-[#fff] select-none text-[18px] md:text-[28px] text-start'>About.</p>
        </div>
      </div>
      <About />

      <div>
        <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Alumini</p></div>

      </div>

      <Footer />
    </>
  )
}

export default AboutSchool

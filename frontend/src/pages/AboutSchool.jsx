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
        <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Our Location</p></div>
        <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14226.089000840064!2d30.123787599999996!3d-1.9706969500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b0a3c391f5%3A0x22cc83060ed1bf2c!2sKabeza%2C%20Kigali!5e1!3m2!1sen!2srw!4v1725632245994!5m2!1sen!2srw" width="100%" height="450" className='pr-[25px] pl-[25px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutSchool

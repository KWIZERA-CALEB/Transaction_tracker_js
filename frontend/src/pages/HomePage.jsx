import React, { useEffect, useState } from 'react'
import Navigation from '../components/molecules/Navigation'
import { Helmet } from 'react-helmet'
import Hero from '../components/molecules/Hero'
import Preloader from '../components/atoms/Preloader'
import Footer from '../components/molecules/Footer'


const HomePage = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const managePreloader = () => {
      setTimeout(() => {
        setShowPreloader(false)
      }, 5000)
    }

    managePreloader ()
  }, [])
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {showPreloader && <Preloader />}
      <Navigation />
      <Hero />
      <div className='mt-[30px] mb-[30px]'></div>
      <Footer />
    </>
  )
}

export default HomePage

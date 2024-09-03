import React, { useEffect, useState } from 'react'
import Navigation from '../components/molecules/Navigation'
import { Helmet } from 'react-helmet'
import Hero from '../components/molecules/Hero'
import Preloader from '../components/atoms/Preloader'
import Footer from '../components/molecules/Footer'
import OverviewCounting from '../components/molecules/OverviewCounting'
import About from '../components/organisms/About'
import PrincipalMessage from '../components/organisms/PrincipalMessage'
import ShortNews from '../components/molecules/ShortNews'


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
      <About />
      <OverviewCounting />
      <PrincipalMessage />
      <ShortNews />
      <Footer />
    </>
  )
}

export default HomePage

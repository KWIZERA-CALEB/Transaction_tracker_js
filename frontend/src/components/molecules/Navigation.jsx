import React, { useState } from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AlignJustify } from 'lucide-react';
import ContactModal from '../organisms/ContactModal';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
    const currentPath = useLocation()
    const [showModal, setShowModal] = useState(false)
    const [showMobileNav, setShowMobileNav] = useState(false)

    const handleToggleMobileNav = () => {
      if (showMobileNav === false) {
        setShowMobileNav(true)
        console.log('Shown')
      } else if(showMobileNav === true) {
        setShowMobileNav(false)
        console.log('Hidden')
      } else {
        console.log('Failed to toggle nav')
      }
    }

   
    const handleShowContactForm = () => {
      setShowModal(true)
    }

    const handleCloseContactForm = () => {
      setShowModal(false)
    }


    const navLinks = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Academics",
            href: "/academics"
        },
        {
            label: "Our School",
            href: "/school"
        },
        {
            label: "Extracurricular",
            href: "/extracurricular"
        },
        {
            label: "School Updates",
            href: "/updates"
        },
    ]

    const appendNavLinks = []

    navLinks.map((navLink, index) => (
        appendNavLinks.push(
            <li key={index} className={currentPath.pathname === navLink.href ? 'poppinsMedium text-[14px] text-secondary hover:text-secondary cursor-pointer' : 'poppinsMedium text-[14px] hover:text-secondary cursor-pointer'}><Link to={navLink.href}>{navLink.label}</Link></li>
        )
    ))
  return (
    <>
    {showModal && <ContactModal onClose={handleCloseContactForm} />}
      <div className='w-full h-[70px] pl-[16px] pr-[16px] bg-white drop-shadow-md flex flex-row justify-between items-center fixed z-40 top-0'>
        <div className='flex flex-row space-x-[6px] items-center'>
          <img src="/images/logos/logo.png" className='w-[40px] md:w-[60px]' alt="Logo" />
          <div className='hidden md:block'>
              <p className='poppinsBold text-[15px] cursor-pointer'>GSO BUTARE</p>
              <p className='poppinsRegular text-[6px] cursor-pointer'>S'INSTRUIRE POUR MIEUX SERVIR</p>
          </div>
          <div onClick={handleToggleMobileNav} className='block bg-slate-200 p-[10px] rounded-full cursor-pointer md:hidden'>
              <AlignJustify className='cursor-pointer' size={18} />
          </div>
        </div>
        <div className='hidden md:block'>
          <ul className='flex flex-row space-x-[20px]'>
              {appendNavLinks}
          </ul>
        </div>
        <div>
          <Button buttonTitle='Contact' onPress={handleShowContactForm} backgroundColor='#1d4ed8' color='#fff' />
        </div>
      </div>
      {showMobileNav && <MobileNavigation />}
    </>
  )
}

export default Navigation

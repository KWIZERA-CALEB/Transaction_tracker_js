import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MobileNavigation = () => {
    const currentPath = useLocation()
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
    <div className='w-full fixed top-[70px] md:hidden z-30 right-0 border-b-[2px] border-solid border-secondary animate-slideInFromLeft left-0 p-[30px] bg-white'>
        <div className='flex justify-center'>
          <ul className='flex flex-col justify-center space-y-[20px]'>
              {appendNavLinks}
          </ul>
        </div>
    </div>
  )
}

export default MobileNavigation

import React, { useState, useEffect } from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navigation = () => {
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
    <div className='w-full h-[70px] pl-[16px] pr-[16px] bg-white drop-shadow-md flex flex-row justify-between items-center fixed z-40 top-0'>
      <div className='flex flex-row space-x-[6px] items-center'>
        <img src="/images/logos/logo.png" className='w-[60px]' alt="Logo" />
        <div>
            <p className='poppinsBold text-[15px] cursor-pointer'>GSO BUTARE</p>
            <p className='poppinsRegular text-[6px] cursor-pointer'>S'INSTRUIRE POUR MIEUX SERVIR</p>
        </div>
      </div>
      <div>
        <ul className='flex flex-row space-x-[20px]'>
            {appendNavLinks}
        </ul>
      </div>
      <div>
        <Button buttonTitle='Contact' backgroundColor='#1d4ed8' color='#fff' />
      </div>
    </div>
  )
}

export default Navigation

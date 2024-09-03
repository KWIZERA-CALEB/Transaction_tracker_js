import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const Footer = () => {
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
            <li key={index} className={currentPath.pathname === navLink.href ? 'poppinsMedium text-[12px] text-secondary hover:text-secondary cursor-pointer' : 'poppinsMedium text-[12px] hover:text-secondary cursor-pointer'}><Link to={navLink.href}>{navLink.label}</Link></li>
        )
    ))
  return (
    <div className='mt-[30px]'>
        <div className='border-[1px] border-solid border-slate-200'></div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 drop-shadow-md gap-[8px] md:gap-[4px] pr-[16px] pl-[16px] pt-[60px] pb-[60px]'>

            <div className='flex flex-col items-start'>
                <div className='flex flex-row space-x-[6px] items-center'>
                    <img src="/images/logos/logo.png" className='w-[60px]' alt="Logo" />
                    <div>
                        <p className='poppinsBold text-[15px] cursor-pointer'>GSO BUTARE</p>
                        <p className='poppinsRegular text-[6px] cursor-pointer'>S'INSTRUIRE POUR MIEUX SERVIR</p>
                    </div>
                </div>
                <div>
                    <p className='poppinsBold text-[15px] lg:pl-[8px] cursor-pointer'>OUR MISSION</p>
                    <p className='poppinsRegular text-[12px] lg:pl-[8px] cursor-pointer'>
                        Providing inclusive and Wholistic education grounded in Christian values<br></br> enabling our students to be good Christians and good citizens.
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <p className='poppinsBold text-[15px] cursor-pointer'>OUICK LINKS</p>
                </div>
                <div>
                    <ul className='flex flex-col space-y-[6px]'>
                        {appendNavLinks}
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <p className='poppinsBold text-[15px] cursor-pointer'>OUR VALUES</p>
                </div>
                <div>
                    <ul className='flex flex-col space-y-[6px]'>
                        <li className='poppinsMedium text-[12px] cursor-pointer'>Discipline</li>
                        <li className='poppinsMedium text-[12px] cursor-pointer'>Studies</li>
                        <li className='poppinsMedium text-[12px] cursor-pointer'>Hardworking</li>
                        <li className='poppinsMedium text-[12px] cursor-pointer'>Collaboration</li>
                        <li className='poppinsMedium text-[12px] cursor-pointer'>Sports</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <p className='poppinsBold text-[15px] cursor-pointer'>SUBSCRIBE</p>
                    <p className='poppinsRegular text-[12px] cursor-pointer'>
                        If you subscribe to news letter, you will be notified about updates.
                    </p>
                    <div>
                        <Input placeholder="Email" />
                        <div className='mt-[4px]'>
                            <Button buttonTitle='Subscribe' backgroundColor='#1d4ed8' color='#fff' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer

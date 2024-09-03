import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/molecules/Navigation'
import Button from '../components/atoms/Button'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Navigation />
      <div className='w-full h-[100vh] fixed inset-0 flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <div><p className='poppinsBold text-[28px] cursor-pointer'>404</p></div>
            <div><p className='poppinsMedium text-[14px]'>Page Not Found</p></div>
            <div className='mt-[4px]'>
              <Link to={'/'}>
                <Button buttonTitle='Return Home' backgroundColor='#1d4ed8' color='#fff' />
              </Link>
            </div>
          </div>
      </div>
    </>
  )
}

export default Notfound

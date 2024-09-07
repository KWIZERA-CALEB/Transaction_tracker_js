import React from 'react'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='w-full h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-blue-300/[40%] flex justify-center items-center z-50'>
      <div className='w-[400px] relative rounded-[20px] p-[20px] bg-white'>
        <p className='poppinsBold text-[15px] text-center cursor-pointer'>Admin Login</p>
        <p className='poppinsMedium text-[12px] cursor-pointer text-center'>Send your suggestion here. This will help improve the working of the school community.</p>
        <div>
            <form className='flex flex-col space-y-[6px]'>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button type='submit' buttonTitle='Login' backgroundColor='#1d4ed8' color='#fff' />
            </form>
            <p className='poppinsMedium text-[12px] cursor-pointer text-center'>Return to Site: <Link to={'/'}><span className='text-secondary'>Home</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

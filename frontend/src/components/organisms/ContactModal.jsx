import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const ContactModal = () => {
  return (
    <div className='w-full h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-blue-300/[40%] flex justify-center items-center z-50'>
      <div className='w-[400px] rounded-[20px] p-[20px] bg-white'>
        <p className='poppinsBold text-[15px] text-center cursor-pointer'>Contact Us</p>
        <div>
            <form className='flex flex-col space-y-[6px]'>
                <Input placeholder="Email" />
                <Input placeholder="Name" />
                <textarea name="" id="" placeholder='Type Suggestion' className='w-full h-[50px] pl-[14px] pr-[14px] pt-[7px] placeholder-poppinsMedium placeholder-text[14px] pb-[7px] border-slate-400 border-[2px] border-solid focus:border-secondary focus:outline-none'></textarea>
                <Button buttonTitle='Contact' backgroundColor='#1d4ed8' color='#fff' />
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactModal

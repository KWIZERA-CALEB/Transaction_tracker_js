import React, { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { CircleX } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';
import Toast from '../atoms/Toast'

const ContactModal = ({ onClose }) => {
  const [showToast, setShowToast] = useState(false)

  const handleSendMessage = (e) => {
    e.preventDefault()
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  return (
    <div className='w-full h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-blue-300/[40%] flex justify-center items-center z-50'>
      <div className='w-[400px] relative rounded-[20px] p-[20px] bg-white'>
        <p className='poppinsBold text-[15px] text-center cursor-pointer'>Contact Us</p>
        <p className='poppinsMedium text-[12px] cursor-pointer text-center'>Send your suggestion here. This will help improve the working of the school community.</p>
        <div>
            <form onSubmit={handleSendMessage} className='flex flex-col space-y-[6px]'>
                <Input placeholder="Email" />
                <Input placeholder="Name" />
                <textarea name="" id="" placeholder='Type Suggestion' className='w-full poppinsMedium text-[14px] h-[70px] pl-[7px] pr-[14px] pt-[7px] placeholder-poppinsMedium placeholder-text[14px] pb-[7px] border-slate-200 border-[2px] border-solid focus:border-secondary focus:outline-none'></textarea>
                <Button type='submit' buttonTitle='Contact' backgroundColor='#1d4ed8' color='#fff' />
            </form>
            {showToast ? <Toast /> : null}
        </div>

        <div className='absolute top-[20px] right-[20px]'>
          <CircleX size={18} className='cursor-pointer' onClick={onClose} />
        </div>

        <div className='flex flex-row mt-[10px] space-x-[6px] justify-center'>
          <div className='border-[2px] border-solid p-[6px] hover:bg-secondary rounded-full border-slate-200'>
            <Facebook size={18} className='cursor-pointer hover:text-white' />
          </div>
          <div className='border-[2px] border-solid p-[6px] hover:bg-sky-500 rounded-full border-slate-200'>
            <Twitter size={18} className='cursor-pointer hover:text-white' />
          </div>
          <div className='border-[2px] border-solid hover:bg-orange-500 p-[6px] rounded-full border-slate-200'>
            <Mail size={18} className='cursor-pointer hover:text-white' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactModal

import React from 'react'

const Toast = () => {

  return (
    <div>
        <div className='fixed bottom-[20px] left-[50%] transform -translate-x-1/2 bg-green-500 z-20 text-white pt-[10px] pl-[20px] pb-[10px] pr-[20px] poppinsMedium cursor-pointer'>
            <p className='poppinsMedium text-[12px] text-center'>Message Sent Successfully.</p>
        </div>  
    </div>
  )
}

export default Toast

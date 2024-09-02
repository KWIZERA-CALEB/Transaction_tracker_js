import React from 'react'

const Preloader = () => {
  return (
    <div className='w-full h-[100vh] fixed inset-0 flex justify-center items-center z-50 bg-[#fff]'>
      <div className='loader'></div>
    </div>
  )
}

export default Preloader

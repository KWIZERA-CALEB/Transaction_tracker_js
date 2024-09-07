import React from 'react'
import CountUp from 'react-countup';


const OverviewCounting = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center space-y-[20px] md:space-y-[0px] md:space-x-[100px] pr-[25px] pl-[25px] pt-[40px] pb-[40px] bg-secondary cursor-pointer'>
      <div className='flex flex-col items-center'>
        <div><p className='poppinsBold text-[28px] text-[#fff] cursor-pointer'><CountUp end={1350} duration={3} /></p></div>
        <div><p className='poppinsMedium text-[14px] text-[#fff]'>Students</p></div>
      </div>
      <div className='flex flex-col items-center'>
        <div><p className='poppinsBold text-[28px] text-[#fff] cursor-pointer'><CountUp end={84} duration={3} /></p></div>
        <div><p className='poppinsMedium text-[14px] text-[#fff]'>Staff</p></div>
      </div>
      <div className='flex flex-col items-center'>
        <div><p className='poppinsBold text-[28px] text-[#fff] cursor-pointer'><CountUp end={42} duration={3} /></p></div>
        <div><p className='poppinsMedium text-[14px] text-[#fff]'>Classes</p></div>
      </div>
      <div className='flex flex-col items-center'>
        <div><p className='poppinsBold text-[28px] text-[#fff] cursor-pointer'><CountUp end={95} duration={3} />%</p></div>
        <div><p className='poppinsMedium text-[14px] text-[#fff]'>Legacy in Average</p></div>
      </div>
    </div>
  )
}

export default OverviewCounting

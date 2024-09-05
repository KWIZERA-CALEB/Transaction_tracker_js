import React from 'react'

const Input = (props) => {
  return (
    <div className='mt-[4px]'>
      <input type="text" placeholder={props.placeholder} className='pl-[14px] pr-[14px] w-full pt-[7px] placeholder-poppinsMedium placeholder-text[14px] pb-[7px] border-slate-400 border-[2px] border-solid focus:border-secondary focus:outline-none' />
    </div>
  )
}

export default Input

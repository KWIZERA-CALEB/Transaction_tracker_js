import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className='poppinsMedium text-[12px] w-full rounded-full pt-[7px] pb-[7px] pr-[14px] pl-[14px]' onClick={props.onPress} style={{ backgroundColor: props.backgroundColor, color: props.color }}>{props.buttonTitle}</button>
    </>
  )
}

export default Button

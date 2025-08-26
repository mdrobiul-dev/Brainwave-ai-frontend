import React from 'react'

const Icon = ({icon, title, details}) => {
  return (
    <div>
        <div className='h-[75px] w-[75px] m-auto'>
            <img src={icon} className='h-full w-full'/>
        </div>
        <h3 className='font-primary font-bold text-xl text-[#555555] text-center'>{title}</h3>
        <p className='font-source font-normal text-[17px] text-[#202020] text-center'>{details}</p>
    </div>
  )
}

export default Icon
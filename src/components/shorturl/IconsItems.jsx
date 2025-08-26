import React from 'react'
import Icon from '../Icon'

const IconsItems = () => {
  return (
    <section className='flex justify-center bg-[#F9F9F9] pt-[60px] pb-20 border-b-4 border-[#00A0DB]'>
      <div className="container  ">
      <div className='w-3/4 m-auto grid grid-cols-3 gap-x-14 gap-y-14'>
        <Icon icon="/icon-1.png" title="Easy" details="ShortURL is easy and fast, enter the long
link to get your shortened link"/>
        <Icon icon="/icon-2.png" title="Shortened" details="Use any link, no matter what size,
ShortURL always shortens"/>
        <Icon icon="/icon-3.png" title="Secure" details="Check the number of clicks that your
shortened URL received"/>
        <Icon icon="/icon-4.png" title="Statistics" details="It is fast and secure, our service has
HTTPS protocol and data encryption"/>
        <Icon icon="/icon-5.png" title="Reliable" details="All links that try to disseminate spam,
viruses and malware are deleted"/>
        <Icon icon="/icon-6.png" title="Devices" details="Compatible with smartphones, tablets
and desktop"/>
      </div>
      </div>
    </section>
  )
}

export default IconsItems
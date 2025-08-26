import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-6 pb-[60px] bg-[#333333] flex justify-center'>
        <div className="container">
            <div>
                <p className='text-center font-source font-normal text-[17px] text-[#EEEEEE] pb-3'>© 2025 ShortUrl.at - Tool to shorten a long link</p>
                <div className='flex justify-center'>
                    <ul className='flex text-[#0093FF] font-primary font-normal text-base'>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>ShortURL</a>
                        </li>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>URL Click Counter</a>
                        </li>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>Unshorten URL</a>
                        </li>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>Report Malicious URL</a>
                        </li>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>Terms of Service</a>
                        </li>
                        <li className='pr-4 border-r border-[#001121] mr-4'>
                            <a>Privacy</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
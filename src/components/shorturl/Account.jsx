import React from 'react'

const Account = () => {
  return (
    <section className='flex justify-center bg-[#F9F9F9] pt-5 pb-7 '>
        <div className="container flex justify-center rounded-md">
            <div className='bg-white py-6 w-3/5 shadow-custom-shadow'>
                <h2 className='text-center font-primary font-bold text-[26px] text-[#555555]'>Want More? Try Premium Features!</h2>
                <p className='pt-5 font-source font-normal text-[17px] text-[#202020] text-center pb-[30px]'>Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes,<br/>
                browser extension, app integrations and support</p>
                <div className="bg-[#2C87C5] w-[171px] m-auto flex justify-center rounded-sm ">
                    <button className="py-[17px] t font-lato font-bold text-[17px] whitespace-nowrap text-[#ffffff]">Create Account</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Account
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

function ContactBanner() {
    const router = useRouter();


  return (
    <div className=' flex md:flex-row flex-col md:items-start items-center container mx-auto justify-between px-20 py-8 md:py-20 ' >
        <img width={400} height={200} src="/24-7.png" alt="codata banner" className="hidden md:flex h-full w-1/6 object-contain"/>
        <div className='flex flex-col items-center md:items-end space-y-7' >
            <div className='absolute -z-50 w-[38rem] h-[38rem] -right-32 -top-10 bg-[#d6f3ba] rounded-full opacity-20 '  />
            <div className='absolute -z-50 w-[38rem] h-[38rem] -left-44 top-96  bg-[#8d9981] rounded-full opacity-20 '  />
            <div className='flex items-center space-x-8 ' >
                <span className='text-base font-semibold text-main' >تواصل معنا</span>
                <span onClick={() => router.push('/')} className='text-base font-semibold cursor-pointer hover:text-main duration-300 ease-out ' >الرئيسية</span>
            </div>
            <h1 className='text-[2rem] md:text-[3.5rem] text-center md:text-right font-semibold' >تواصل معنا</h1>
        </div>
    </div>
  )
}

export default ContactBanner
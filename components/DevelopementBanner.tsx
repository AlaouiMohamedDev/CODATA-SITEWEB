import { Router, useRouter } from 'next/router'
import React from 'react'

function DevelopementBanner() {
    const router = useRouter();
  return (
    <div className=' flex md:flex-row flex-col md:items-start items-center container mx-auto justify-between space-y-5 md:space-y-0 md:space-x-16 px-16 md:px-5 py-8 md:py-20 ' >
        <img src="/banner-dev.png" alt="codata banner" className="md:hidden w-[40rem] object-contain"/>
        <div className='w-full flex flex-col items-center md:items-end space-y-7' >
            <div className='absolute -z-50 w-[38rem] h-[38rem] -right-32 -top-10 bg-[#91ff00] rounded-full opacity-20 '  />
            <div className=' hidden md:inline absolute -z-50 w-[38rem] h-[38rem]  -left-44 -top-[18rem]  bg-[#82ff05] rounded-full opacity-20 '  />
            <div className='absolute -z-50 w-[38rem] h-[38rem] -right-44 top-[124rem]  bg-[#c4e1a7] rounded-full opacity-20 '  />
            <div className='absolute -z-50 md:z-50 w-[38rem] h-[38rem] -left-96 top-[80rem]  bg-[#8d9981] rounded-full opacity-20 '  />
            <div className='flex w-full flex-col items-center space-y-6 md:space-y-12 md:items-end' >
                <p className='text-red-500 font-black text-xl' >نحن بارعون في</p>
                <h1 className='text-[2rem] md:text-[3.5rem] w-full text-center md:text-right font-bold' >تصميم وبرمجة المواقع والتطبيقات</h1>
                <button onClick = {() => router.push('/contact')} className='bg-gray-800 hover:bg-gray-700 duration-300 text-white py-7 w-full md:w-1/2 px-4 font-semibold rounded-2xl ' >اطلب مشروعك الان</button>
            </div>
        </div>
        <img width={400} height={200} src="/banner-dev.png" alt="codata banner" className="hidden md:flex h-3/4 w-3/5 object-cover"/>

    </div>
  )
}

export default DevelopementBanner
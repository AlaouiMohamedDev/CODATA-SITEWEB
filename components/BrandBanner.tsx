import { useRouter } from 'next/router'
import React from 'react'

function BrandBanner() {
    const router = useRouter();
  return (
    <div className=' flex md:flex-row flex-col md:items-start items-center container mx-auto justify-between space-y-5 md:space-y-0 md:space-x-20 px-16 py-8 md:py-20 ' >
        <img width={400} height={200} src="/brand2.png" alt="codata banner" className="md:hidden h-1/2 w-3/5 object-contain"/>
        <div className='w-full flex flex-col items-center md:items-end space-y-7' >
            <div className='absolute -z-50 w-[38rem] h-[38rem] -right-32 -top-10 bg-[#aad0fc] rounded-full opacity-20 '  />
            <div className=' hidden md:inline absolute -z-50 w-[38rem] h-[38rem]  -left-44 top-96  bg-[#8d9981] rounded-full opacity-20 '  />
            <div className='absolute -z-50 w-[38rem] h-[38rem] -right-44 top-[124rem]  bg-[#8d9981] rounded-full opacity-20 '  />
            <div className='absolute -z-50 md:z-50 w-[38rem] h-[38rem] -left-96 top-[80rem]  bg-[#8d9981] rounded-full opacity-20 '  />
            <div className='flex w-full flex-col space-y-4' >
                <h1 className='text-[2rem] md:text-[3.2rem] text-center md:text-right font-semibold' >بناء الهوية التجارية و التصميم</h1>
                <p className='text-center  md:text-right text-lg text-gray-500' >علامتك التجارية ليست فقط رمزًا يحدد مشروعك أو عملك ، بل هي أيضًا مفهوم يعكس أهدافك وما يمكن أن يحققه عملك. لذا نصمم علامتك التجارية بكل إحترافية و نعتبرها بمثابة أداة تسويقية لك، تعكس اتساق عملك واحترافه وتميزك عن المنافسين في مجالك.</p>
            </div>
        </div>
        <img width={400} height={200} src="/brand2.png" alt="codata banner" className="hidden md:flex h-1/2 w-3/5 object-contain"/>

    </div>
  )
}

export default BrandBanner
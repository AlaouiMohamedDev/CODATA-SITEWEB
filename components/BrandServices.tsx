import React from 'react'
import { brandServices } from '../lib/brandServicesItems'

function BrandServices() {
  return (
    <div className='flex flex-col items-center bg-gray-800 py-24 px-10 rounded-lg text-white text-right space-y-12'>
        <div className='flex md:flex-row flex-col w-full text-center space-y-10 md:space-y-0' >
            <p className=' md:w-1/2 text-gray-300 text-center text-lg' > كوداتا متخصصة في التصميم الجرافيكي الإبداعي وتطوير هوية العلامة التجارية والتسويق عبر الإنترنت. هدفنا هو مساعدة الشركات من خلال توفير خدمات الهوية البصرية المناسبة لاحتياجاتهم وميزانياتهم . </p>
            <h1 className='text-4xl font-semibold md:w-1/2' >خدمات مصممة خصيصا لاحتياجاتك!</h1>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4' >
            {
                brandServices.map(({img,title,tagline,id},i) => (
                    <div key={id} className="flex flex-col items-center text-center space-y-4 hover:shadow-2xl hover:bg-gray-700 duration-300 rounded-md  py-10 px-8" >
                        <img src={'/'+img+id+'.png'} alt="" />
                        <h1 className='font-semibold text-xl' >{title}</h1>
                        <p className='text-gray-400 ' >{tagline}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BrandServices
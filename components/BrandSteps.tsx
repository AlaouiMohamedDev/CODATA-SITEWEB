import React from 'react'
import { brandSteps } from '../lib/BrandSteps'

function BrandSteps() {
  return (
    <div className='flex flex-col items-center py-20 space-y-10 rounded border my-10 shadow bg-white' >
        <p className='px-2 text-center md:px-0 text-lg text-red-600 font-semibold'>كل مؤسسة لديها قصة لترويها ويتم سرد هذه القصة من خلال الرسومات</p>
        <h1 className='text-3xl text-center md:text-5xl font-semibold' >خطوات بسيطة لتصميم الشعار</h1>
        <div className='grid md:grid-cols-2' >
            {
                brandSteps.map(({ title , id , icon , tagline }) => (
                    <div key={id} className="space-x-4 mx-3 md:mx-0 text-right hover:bg-gray-100 rounded-lg duration-300 px-10 py-10 md:py-12 flex" >
                        <div className='flex flex-col space-y-2' >
                            <h1 className='text-xl md:text-2xl font-semibold text-gray-700' >{ title }</h1> 
                            <p>{tagline}</p>
                        </div>
                        <img src={icon} alt="icon" className='h-16 md:h-20' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BrandSteps
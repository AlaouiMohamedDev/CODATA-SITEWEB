import Image from 'next/image'
import React from 'react'
import { ProjectWeb } from '../lib/ProjectsWeb'

function DevelopementProjects() {
  return (
    <div className='bg-gray-700 rounded-lg text-white py-20 px-10 space-y-16 mb-10' >
        <div className='space-y-8 flex flex-col text-center items-center' >
            <h1 className='text-4xl md:text-6xl font-semibold ' >مشاريع نفتخر بها</h1>
            <p className='text-lg font-semibold text-gray-400' > لدينا بعض البصمات والانجازات التي نعتز بها في هذا الميدان .</p>
        </div>
        <div className='grid md:grid-cols-3 gap-10' >
            {
                ProjectWeb.map(({id,title,tech,image,href}) => (
                    <a href={href} target="_blank" className='group cursor-pointer shadow flex flex-col items-center space-y-5 bg-[#ffffff] py-10 rounded-lg text-gray-800' key={id} >
                        <p className='text-lg text-gray-500' >{tech}</p>
                        <h1 className='text-2xl font-semibold pb-10' >{title}</h1>
                        <Image src={image} width={3700} height={2000} objectFit="contain" className="group-hover:scale-105 duration-300 "  />
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default DevelopementProjects
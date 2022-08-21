import React from 'react'

function AboutInfo() {
  return (
    <div className='flex md:flex-row flex-col items-center w-full justify-between px-5 space-y-10 md:space-x-10' >
           
            <div className='text-right flex flex-col items-end space-y-5 md:space-y-8 md:w-1/2' >
                <h1 className='text-4xl md:text-6xl font-semibold' >طاقم كوداتا</h1>
                <p className='text-main font-semibold text-xl md:text-2xl pb-3 border-b-4 border-[#00ffc3]' >من نحن؟</p>
                <p className='text-gray-700 text-lg w-11/12' >نحن فريق من المصممين الموهوبين والمتنوعين والمطورين ورؤساء البيانات والمسوقين والأفراد. نحن نهتم بشدة بالعمل الذي نقوم بإنشائه ، ونستمتع أثناء القيام به.</p>
                <p className='text-main font-semibold text-xl md:text-2xl pb-3 border-b-4 border-[#00ffc3]' >ما هي مهمتنا؟</p>
                <p className='text-gray-700 text-lg w-11/12' >بسيطة - مهمتك هي مهمتنا ™. نحن نعمل بجد كل يوم لصياغة حلول مبتكرة تساعدك على رفع المزيد ، والوصول إلى المزيد وتنمية عملك المذهل في جميع أنحاء العالم. نعتقد أن ما نقوم به يمكن أن يساعد في تغيير العالم.</p>
            </div>
            <div className=' md:w-1/2' >
                <img src="https://mediaman.ma/assets/media/about/about-2-r.png" className='h-[30rem] md:h-[40rem]' alt="about image" />
            </div>
    </div>
  )
}

export default AboutInfo
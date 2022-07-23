import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Header() {

  useEffect(() =>{
    AOS.init();
  },[])

  const sidebar = () => {
    const sidebar1 = document.querySelector('.sidebar1')
    const sidebar2 = document.querySelector('.sidebar2')
    sidebar1.classList.remove('hidden')
    sidebar2.classList.remove('-right-full')
    sidebar2.classList.add('right-0');
}

  return (
    <header class="flex items-center justify-between py-11 px-5">
        <div class="md:flex hidden items-center mx-7">
          <img src="/fr-icon.png" alt="Codata logo" className="h-5"/>
          <span class="cursor-pointer font-poppins hover:text-gray-500 pl-2">FR</span>
        </div>
        <nav class="md:flex hidden items-center text-md font-semibold text-gray-600"  dir="rtl">
            <div class="relative group flex flex-col items-center">
              <span class="cursor-pointer hover:text-main mx-7">الرئيسية</span>
              <span class="absolute bg-main rounded h-0.5 w-0 -bottom-2 transition-all duration-500 group-hover:w-12"></span>
            </div>
            <div class="relative group flex flex-col items-center">
              <span class="cursor-pointer hover:text-main mx-7">من نحن</span>
              <span class="absolute bg-main rounded h-0.5 w-0 -bottom-2 transition-all duration-500 group-hover:w-12"></span>
            </div>
            <div class="relative group flex flex-col items-center">
              <span class="flex items-center cursor-pointer hover:text-main mx-7">خدماتنا<i class='pr-1 bx bxs-chevron-down'></i></span>
              <span class="absolute bg-main rounded h-0.5 w-0 -bottom-2 transition-all duration-500 group-hover:w-12"></span>
              <div  class="absolute top-9 right-5  bg-white shadow-xl rounded text-sm transition-all duration-500 text-gray-500 w-60 py-5 pr-6 opacity-0 group-hover:opacity-100">
                <nav class="flex flex-col text-right space-x-10 space-y-4">
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">خدماتنا</a>
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">بناء الهوية التجارية و التصميم</a>
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">تصميم و برمجة المواقع </a>
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">الحملات الإعلانية</a>
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">الفيديوهات التسويقية</a>
                  <a data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">ادارة مواقع التواصل الاجتماعي</a>
                </nav>
              </div>
            </div>
            <div class="relative group flex flex-col items-center">
              <span class="cursor-pointer hover:text-main mx-7">تواصل معنا</span>
              <span class="absolute bg-main rounded h-0.5 w-0 -bottom-2 transition-all duration-500 group-hover:w-12"></span>
            </div>
        </nav>
        {/*LOGO*/}
        <div class="md:hidden"  onClick= {sidebar}>
          <i class=' cursor-pointer bx bx-menu px-2 text-gray-700
          py-1 text-3xl bg-gray-100 rounded-full'></i>
        </div>
        <img src="/logos-1.png" alt="Codata logo" className="md:h-12 h-10 "/>
    </header>
  )
}

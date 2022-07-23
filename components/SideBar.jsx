import React, { useEffect } from 'react'
import  { useRouter} from 'next/router';
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Sidebar() {

    useEffect(() =>{
        AOS.init();
      },[])
    
    const router = useRouter();

    const closeSidebar = () =>{
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.add('hidden')
        sidebar2.classList.add('-right-full')
        sidebar2.classList.remove('right-0')
    }

    const toggleList = () => {
        const list = document.querySelector('.list')
        list.classList.toggle('hidden')
        list.classList.toggle('flex')
    }

    
    
  return (
    <aside className="">
            <div onClick={closeSidebar} className="sidebar1 hidden w-full h-screen fixed top-0 z-50 bg-gray-500 opacity-60  transform duration-100">

            </div>
           <div className="sidebar2 flex flex-col w-2/3 h-screen top-0 fixed bg-white z-50  -right-full transform duration-500 ">
                <div className=" flex items-center justify-between px-2 py-5 text-sm">
                    <i onClick={closeSidebar} class='bx bx-x  text-2xl font-bold rounded cursor-pointer'></i>
                    <img src="/logos-1.png" alt="Codata logo" className="h-8 "/>
                </div>
                <div className="flex flex-col px-5 text-gray-700  text-right font-semibold">
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-y border-gray-200">الرئيسية</span>
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">من نحن</span>
                    <div class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">
                        <div onClick={toggleList} class=" flex items-center justify-between">
                            <i class='pr-1 bx bxs-chevron-down'></i>
                            <span>خدماتنا</span>
                        </div>
                        <nav  class="hidden flex-col transition-all duration-500 text-sm text-right pr-10 py-5 space-y-3 list">
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">خدماتنا</a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">بناء الهوية التجارية و التصميم</a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">تصميم و برمجة المواقع </a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">الحملات الإعلانية</a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">الفيديوهات التسويقية</a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                            <div class="flex items-center  justify-end">
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">ادارة مواقع التواصل الاجتماعي</a>
                                <i class='bx bx-stop text-main pl-3'></i>
                            </div>
                        </nav>
                    </div>
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">تواصل معنا</span>
                    <div class="flex items-center justify-end py-4 border-b border-gray-200 ">
                        <img src="/fr-icon.png" alt="Codata logo" className="h-5"/>
                        <span class="cursor-pointer hover:text-gray-500 pl-2">FR</span>
                    </div>
                </div>
               
            </div>
    </aside>
  )
}
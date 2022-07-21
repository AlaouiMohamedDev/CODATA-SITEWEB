import React from 'react'

export default function Header() {


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
          <span class="cursor-pointer hover:text-gray-500 pl-2">FR</span>
        </div>
        <nav class="md:flex hidden items-center text-md"  dir="rtl">
            <span class="cursor-pointer hover:text-gray-500 mx-7">الرئيسية</span>
            <span class="cursor-pointer hover:text-gray-500 mx-7">من نحن</span>
            <span class="cursor-pointer hover:text-gray-500 mx-7">خدماتنا</span>
            <span class="cursor-pointer hover:text-gray-500 mx-7">تواصل معنا</span>
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

import React from 'react'

export default function Banner() {
  return (
    <div class="flex flex-col md:flex-row mb-20 md:mb-0 py-10 h-screen">
        <img src="/banner.png" alt="banner" class="hidden md:flex h-full w-1/2 object-contain"/>
        <div class="flex flex-col text-right md:w-1/2 mx-5 md:mr-14 space-y-16 my-10">
            <h6 class="text-red-500 text-sm font-bold ">وكالة إبداعية ترافق مشاريعكم</h6>
            <p class="text-7xl text-Cblue font-black">الحلول الإبداعية للأفراد والشركات</p>
            <p class="text-gray-500 text-md  w-2/3 ml-auto">سمعتنا وجودة عملنا هما رأسمالنا الأهم و الوحيد
            لذلك كونوا على ثقة تامة أنكم في أيد أمينة.</p>
            <div class="flex items-center justify-end space-x-7">
                <div class="flex items-center text-gray-900 text-sm space-x-3 cursor-pointer hover:text-gray-700 duration-300">
                    <i class='bx bx-chevrons-left'></i>
                    <span class="">تواصل معنا</span>
                </div>
                <button class="bg-gray-900 hover:bg-gray-700 duration-500 text-white py-5 px-5 rounded text-lg font-bold w-1/3">لنبدأ الآن</button>
            </div>
        </div>
        <img src="/banner.png" alt="banner" class="md:hidden h-full object-contain"/>
    </div>
  )
}

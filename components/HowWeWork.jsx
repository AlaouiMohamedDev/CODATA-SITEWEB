import React from 'react'

export default function HowWeWork() {
  return (
    <div class="md:px-20 flex flex-col items-center" >
        <h6 class="text-center text-sm text-red-500 mb-8 font-bold">خلطتنا السحرية</h6>
        <h1 class="text-center text-Cblue text-5xl font-black">كيف نعمل معاً</h1>
        <div class="flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0 my-10  mx-10  md:mx-52 md:my-32" dir="rtl">
            <div class="relative flex flex-col items-center text-center space-y-7 md:ml-12 py-7 px-5 bg-gray-50 md:w-1/3 rounded " dir="rtl">
                <span class="absolute z-20 text-2xl bg-white p-6 flex items-center justify-center  w-2 h-2 rounded-full border border-gray-300 left-8 top-16">1</span>
                <img src="/pattern-3.png" class="absolute -z-10 w-48 -top-16 -left-9" />
                <img src="/pattern-3.png" class="absolute -z-10 w-48 -bottom-9 -right-9" />
                <div class="hidden md:flex absolute h-0.5 bg-gray-500 w-32 top-12 -left-20 z-10"></div>
                <i class='bx bx-conversation text-red-400 text-6xl'></i>
                <h3 class="text-xl text-Cblue font-black">التواصل الفعال</h3>
                <p class="text-md w-52">يقوم الفريق المتخصص بدراسة شاملة لمشروعك، و نركز على إيجاد سبل و طرق للوصول إلى متطلباتك و أهدافك.</p>
            </div>
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200  hover:border-gray-50 transition-colors duration-200 hover:bg-gray-50 md:w-1/3 rounded " dir="rtl">
                <span class="absolute z-20 text-2xl bg-white p-6 flex items-center justify-center  w-2 h-2 rounded-full border border-gray-300 left-8 top-16">2</span>
                <div class="hidden md:flex absolute h-0.5 bg-gray-500 w-32 top-12 -left-20 z-10"></div>
                <i class='bx bx-line-chart text-red-400 text-6xl transition-all  hover:text-blue-500 hover:-translate-y-3 duration-400'></i>
                <h3 class="text-xl text-Cblue font-black">وضع خطة ومؤشرات</h3>
                <p class="text-md w-52">استراتيجية العمل هي أهم شيء، تخطيط ساعة يوفر يوماً من العمل و يعطي مردودية أكبر.</p>
            </div>
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200  hover:border-gray-50 transition-colors duration-200 hover:bg-gray-50 md:w-1/3 rounded " dir="rtl">
                <span class="absolute z-20 text-2xl bg-white p-6 flex items-center justify-center  w-2 h-2 rounded-full border border-gray-300 left-8 top-16">3</span>
                <div class="hidden md:flex absolute h-0.5 bg-gray-500 w-32 top-12 -left-20 z-10"></div>
                <i class='bx bx-package text-red-400 text-6xl  transition-all  hover:text-blue-500 hover:-translate-y-3 duration-400'></i>
                <h3 class="text-xl text-Cblue font-black">العمل بجد</h3>
                <p class="text-md w-52">في هذه المرحلة ، يكون جنود الخفاء على قدم وساق من أجل الوصول الى مخرجات عالية الجودة.</p>
            </div>
            
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200 hover:border-gray-50 transition-colors duration-100 hover:bg-gray-50 md:w-1/3 rounded " dir="rtl">
                <span class="absolute text-2xl bg-white p-6 flex items-center justify-center  w-2 h-2 rounded-full border border-gray-300 left-8 top-16">4</span>
                <i class='bx bx-sort-up text-red-400 text-6xl  transition-all  hover:text-blue-500 hover:-translate-y-3 duration-400'></i>
                <h3 class="text-xl text-Cblue font-black">إنطلاق</h3>
                <p class="text-md w-52">نتحرى كل التفاصيل بالتدقيق لنضمن لك إنطلاقة ناجحة و مثمرة.</p>
            </div>
           
            
        </div>
        <button class="bg-Cblue text-white text-sm font-bold py-5 px-9 rounded duration-300 hover:bg-blue-700">تعرف علينا أكثر</button>
    </div>
  )
}

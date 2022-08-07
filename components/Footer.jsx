import React from 'react'

export default function Footer() {
  return (
    <div class="py-8 flex flex-col items-center space-y-8" >
        <div class="flex items-center space-x-10 text-4xl text-gray-600 " >
            <i class='bx bxl-instagram  cursor-pointer hover:text-blue-500 duration-300'></i>
            <i class='bx bxl-facebook cursor-pointer hover:text-blue-500 duration-300'></i>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0" >
            <div class="flex flex-col items-center md:items-end space-y-4" >
                <h6 class="font-semibold text-black" >خدماتنا</h6>
                <div class="flex flex-col items-center md:items-end space-y-3 text-gray-600" >
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >بناء الهوية التجارية و التصميم</p>
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >تصميم و برمجة المواقع</p>
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >الحملات الاعلانية</p>
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >الفيديوات التسويقية</p>
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >ادارة مواقع التواصل الاجتماعي</p>
                </div>

            </div>
            <div class="flex flex-col items-center md:items-end space-y-4">
                <h6 class="font-semibold text-black" >عن كوداتا</h6>
                <div class="flex flex-col items-center md:items-end space-y-3 text-gray-600" >
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >من نحن</p>
                </div>
            </div>
            <div class="flex flex-col items-center md:items-end space-y-4" >
                <h6 class="font-semibold text-black" >تواصل معنا</h6>
                <div class="flex flex-col items-center md:items-end space-y-3 text-gray-600" >
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >تواصل معنا</p>
                    <p class="cursor-pointer hover:text-main duration-300 ease-in-out" >كيفية الإستخدام</p>
                </div>
            </div>
            <div class="flex flex-col md:w-1/4 space-y-7 md:space-y-3 items-center md:items-end" >
                <img src="/logos-1.png" alt="Codata logo" className="md:h-12 h-10 cursor-pointer"/>
                <p class="w-3/4 md:w-full text-center md:text-right text-sm text-gray-600" >إن سمعتنا وجودة عملنا هما رأسمالنا الأهم، بل الوحيد. لذلك كن على ثقة تامة
                    نأمل أن نتعاون في أقرب وقت . أنت في أيد أمينة.
                </p>

            </div>
        </div>

    </div>
  )
}

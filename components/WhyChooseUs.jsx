import React from 'react'

export default function WhyChooseUs() {
  return (
    <div class="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row my-40 mx-20 justify-evenly" dir="rtl">
        <div class="flex flex-col space-y-6 text-right w-max" dir="rtl">
            <h6 class="text-red-500 text-sm">لماذا تختارنا نحن؟</h6>
            <h3 class="text-Cblue text-4xl font-black">كوداتا</h3>
            <div class="flex flex-col">
                <div class="flex items-center">
                    <i class='bx bx-check text-red-500 text-4xl font-black'></i>
                    <span>لدينا الشغف.</span>
                </div>
                <div class="flex items-center">
                    <i class='bx bx-check text-red-500 text-4xl font-black'></i>
                    <span>نفهم الجمهور.</span>
                </div>
                <div class="flex items-center">
                    <i class='bx bx-check text-red-500 text-4xl font-black'></i>
                    <span>نتطور ونبتكر.</span>
                </div>
                <div class="flex items-center">
                    <i class='bx bx-check text-red-500 text-4xl font-black'></i>
                    <span>نستمع وننصت.</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center md:flex-row space-y-10 md:space-x-20 text-center md:items-baseline md:w-2/3">
            <div class="flex flex-col space-y-5 md:pl-20 items-center">
                <img src="/choose-1.png" alt="choose-1" class="w-1/3 object-contain" />
                <h3 class="text-Cblue text-2xl font-bold">استشارة مجانية</h3>
                <p dir="rtl">تواصل معنا واحصل على استشارة مجانية للنهوض بمشروعك.</p>
            </div>
            <div class="flex flex-col space-y-5 items-center">
                <img src="/choose-2.png" alt="choose-1" class="w-2/3 object-contain" />
                <h3 class="text-Cblue text-2xl font-bold">المواكبة</h3>
                <p dir="rtl">تواصلنا الدائم معك طيلة العمل هو أمر أساسي لمعرفة التفاصيل المهمة.</p>
            </div>
            <div class="flex flex-col space-y-5 items-center">
                <img src="/choose-3.png" alt="choose-1" class="w-1/3 object-contain" />
                <h3 class="text-Cblue text-2xl font-bold">عملاء راضون</h3>
                <p dir="rtl">نعمل بجد و نقصد ما نقوله ، هدفنا هو اسعاد عملائنا.</p>
            </div>
        </div>
    </div>
  )
}

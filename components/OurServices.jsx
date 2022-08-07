import React from 'react'

export default function OurServices() {
  return (
    <div class="md:px-20 py-10 flex flex-col items-center" >
        <h6 class="text-center text-sm text-red-500 mb-8 font-bold">مادا نقدم لك ؟</h6>
        <h1 class="text-center text-Cblue text-5xl font-black">ما هي خدماتنا </h1>
        <div class="flex flex-col md:flex-row space-y-10 md:space-y-0 my-10  mx-10  md:mx-52 md:my-32" dir="rtl">
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200  hover:border-gray-50 transition-colors duration-200 hover:bg-gray-50 md:w-3/4 " dir="rtl">
                <h3 class="text-xl text-Cblue font-black"> الإنتاج المرئي</h3>
                <p class="text-sm text-gray-500 w-72">نتوفر على فريق مبدع في مجالات التأليف والإخراج والمونتاج ليوفروا لكم خدمات عالية، باستخدام أحدث التقنيات الفنية والأفكار المبتكرة لإنتاج أعمال يمكنها أن تبقى في ذاكرة الجمهور أطول وقت ممكن.</p>
                <button class = "text-xs  text-blue-700" >إكتشف المزيد</button>
            </div>
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200  hover:border-gray-50 transition-colors duration-200 hover:bg-gray-50 md:w-2/3  " dir="rtl">
                <h3 class="text-xl text-Cblue font-black">التسويق الرقمي</h3>
                <p class="text-sm w-72 text-gray-500">في ظل هذه الثورة التي عرفها التسويق الرقمي، نتوفر على فريق مبدع مساير و مواكب لجميع التطورات في العالم الرقمي و على جميع مواقع التواصل الإجتماعي.</p>
                <button class = "text-xs  text-blue-700" >إكتشف المزيد</button>

            </div>
            <div class="relative flex flex-col items-center text-center space-y-7 py-7 px-5 border border-gray-200 hover:border-gray-50 transition-colors duration-200 hover:bg-gray-50 md:w-2/3 " dir="rtl">
                <h3 class="text-xl text-Cblue font-black">بناء الهوية التجارية</h3>
                <p class="text-sm text-gray-500 w-72">أصبحت الهوية التجارية هي أكبر الإستراتيجيات التي تدر الملايين من الدولارات على اصحاب المشاريع، لهذا كان من الضروري أن يكون فريق ميديا مان يعتمد على جميع الأسس في عملهم لبناء هوية تجارية متناغمة للعملاء.</p>
                <button class = "text-xs  text-blue-700" >إكتشف المزيد</button>
            </div>
        </div>
    </div>
  )
}
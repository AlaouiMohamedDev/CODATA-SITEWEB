import React, { PureComponent } from 'react'

export default class YourTrip extends PureComponent {
  render() {
    return (
      <div class="flex flex-col mt-10 py-16 md:py-72  px-10 w-full bg-gray-50">
        <div class="flex flex-col md:flex-row justify-start items-center md:pb-72 relative  w-full">
            <img src="/map.png" class="w-6/7 md:absolute mb-10 md:mb-0 md:w-3/5 -right-64"/>
            <div class="flex flex-col md:w-1/2 md:text-right space-y-10 md:space-y-5">
                <h6 class="text-sm text-center md:text-right text-red-500 font-bold">
                رحلة مشروعك تبدأ من هنا     
                </h6>
                <h2 class=" text-5xl font-black text-gray-900">الخبرة تصنع الفارق</h2>
                <div class="md:hidden w-full bg-gray-400 h-0.5 rounded px-5"></div>
                <p class="text-center md:w-1/2">نتفهم جيدًا طلباتكم ونمتلك فريق دعم فني على أعلى مستوى من الخبرة والكفاءة
                     والإلتزام في مواعيد التسليم والجودة التي تفوق التوقعات.</p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-end items-center mt-16 md:mt-0 space-y-10 relative  w-full">
            <img src="/Refill-card.png" class="w-6/7 md:absolute mb-10 md:mb-0 md:w-3/5 -left-64 md:mt-16"/>
            <div class="flex flex-col md:w-1/2  text-center md:text-right space-y-10 md:space-y-5">
                <h2 class=" text-5xl font-black text-gray-900">الاحترافية شعارنا</h2>
                <div class="md:hidden w-full bg-gray-400 h-0.5 rounded px-5"></div>
                <p class="text-center md:w-1/2">لنكن دائما رهن إشارتكم نمتلك فريق ذو خبرة و كفاءة عالية للإجابة على جميع أسئلتكم في الوقت المحدد و لنضمن لكم جودة تفوق توقعاتكم.</p>
            </div>
        </div>
      </div>
    )
  }
}

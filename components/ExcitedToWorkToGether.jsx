import React from 'react'
import { useRouter } from 'next/router'


export default function ExcitedToWorkToGether() {
    const router = useRouter();
  return (
    <div class=" bg-gray-900 text-white pt-16 flex flex-col items-center space-y-10" >
        <h5 class="text-main font-bold" >متشوّقون للعمل معًا!</h5>
        <h1 class="text-2xl md:text-5xl font-semibold" >! نود أن نسمع عن مشروعك </h1>
        <button onClick = {() => router.push("/contact")} class="bg-white rounded-md text-gray-800 shadow py-3 px-7 hover:bg-main duration-300 hover:text-white" >تواصل معنا</button>

        <div class="flex items-center " >
            <img class=" h-44 md:h-72 " src="https://mediaman.ma/assets/media/others/laptop-poses.png" alt="" />
            <img class="hidden md:inline h-72" src="https://mediaman.ma/assets/media/others/chat-group.png" alt="" />
            <img class="hidden md:inline h-72" src="https://mediaman.ma/assets/media/others/bill-pay.png" alt="" />
        </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactInfo() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        AOS.init();
    },[]);

    const onSubmit = (data: any) => {
        alert("look your console")
        console.log(data)
    } 
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly md:space-x-44 py-20' >
            
        {/* Info */}
            <div className='flex flex-col items-center space-y-14 md:space-y-28 text-right' >
                <div className='w-11/12 md:w-full bg-gray-800 rounded-lg py-12 px-7 space-y-5 flex flex-col items-end '>
                    <h2 className='font-semibold text-white text-2xl md:text-4xl' >عبر الهاتف</h2>
                    <p className='w-4/5 text-base text-gray-400' >خدمة العملاء مفتوحة من الإثنين الى السبت ،من 10 صباحا الى 6 مساءً.</p>
                    <span className='text-xl md:text-3xl cursor-pointer text-main font-semibold hover:text-white duration-300' >
                        (+212) 7 06 88 37 91
                    </span>
                </div>
                <div className='w-11/12 md:w-full bg-gray-800 rounded-lg py-12 px-7 space-y-5 flex flex-col items-end '>
                    <h2 className='font-semibold text-white text-2xl md:text-4xl' >البريد الالكتروني</h2>
                    <p className='w-4/5 text-base text-gray-400' >سيتم الرد على البريد الإلكتروني في اقل من 24 ساعة.</p>
                    <span className='text-xl md:text-3xl cursor-pointer text-main font-semibold hover:text-white duration-300' >
                        contact@codata-agency.com
                    </span>
                </div>
            </div>
        {/* Form */}
            <div className='md:shadow-xl flex flex-col items-center py-14 px-10 md:px-20 rounded-xl space-y-10' >
                <h1 className=' text-3xl md:text-4xl font-semibold text-center' >سنكون سعداء بتواصلك معنا</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col items-center space-y-7 ' >
                    {(errors.name?.type || errors.phone?.type || errors.message?.type) === 'required' && <p className = "text-red-500 font-semibold"> المرجو اكمال جميع المعلومات</p>}
                    <div className='flex flex-col space-y-2 items-end w-full' >
                        <label htmlFor="" className='font-semibold text-sm' >الاسم</label>
                        <input {...register("name", { required: true, maxLength: 20 })} type="text" className='w-full input' placeholder='الاسم الكامل' />
                    </div>
                    <div className='flex flex-col space-y-2 items-end w-full' >
                        <label htmlFor="" className='font-semibold text-sm' >رقم الهاتف</label>
                        <input 
                            {...register("phone", { 
                                required: true, 
                                maxLength: 20 
                            })} 
                            type="number" 
                            className='w-full input' 
                            placeholder='رقم الهاتف' />
                    </div>
                    <div className='flex flex-col space-y-2 items-end w-full' >
                        <label htmlFor="" className='font-semibold text-sm' >نوع الخدمة</label>
                        <select  
                                {...register("service",{
                                    required:true
                                })}
                                className='w-full input list-none		'
                                placeholder='رقم الهاتف' >
                            <option value="بناء الهوية التجارية و التصميم">بناء الهوية التجارية و التصميم</option>
                            <option value="تصميم و برمجة المواقع">تصميم و برمجة المواقع</option>
                            <option value="الحملات الاعلانية">الحملات الاعلانية</option>
                            <option value="ادارة مواقع التواصل الاجتماعي">ادارة مواقع التواصل الاجتماعي</option>
                        </select>
                    </div>
                    <div className='flex flex-col space-y-2 items-end w-full' >
                        <label htmlFor="" className='font-semibold text-sm' >كيف يمكننا مساعدتك ؟</label>
                        <textarea 
                            {...register("message", { 
                                    required: true, 
                                    maxLength: 20 
                            })} 
                            className='w-full input' 
                            placeholder='رقم الهاتف' > </textarea>
                    </div>

                    <button className='py-4 px-3 hover:bg-gray-600 duration-300 bg-gray-800 text-white rounded-lg w-full' >أرسل رسالتك الآن</button>
                </form>
                <p>أو</p>
                <a href='https://wa.me/0706883791' className='flex items-center justify-center space-x-1 bg-green-500 w-full rounded-lg text-white text-center duration-300 py-4 px-3 hover:bg-green-600' > 
                    <i className='bx bxl-whatsapp text-3xl'></i>  
                    <p>تواصل معنا عبر واتساب</p> </a>
            </div>
    </div>
  )
}

export default ContactInfo
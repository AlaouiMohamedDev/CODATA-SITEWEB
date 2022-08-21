import React, { CSSProperties, Fragment, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { Dialog, Transition } from '@headlessui/react';

function ContactInfo() {

    // Hooks 

    let [isOpen, setIsOpen] = useState(false);
    let [loading,setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    useEffect(() => {
        AOS.init();
    },[]);

    // Variables

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "white",
      };

    // Functions 
    
    const onSubmit = async (data: {}) => {
        if(loading) return;
        setLoading(true);

        const res = await axios.post('/api/sendemail',data);
        if(res.status == 200) {
            setLoading(false);
            setIsOpen(true)
        }

        setLoading(false);
    };

    const closeModal = () => setIsOpen(false);

  return (

    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full flex-col items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full space-y-6 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="flex flex-col items-center text-3xl font-medium leading-6 text-gray-900"
                    >
                        تهــانينا
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-lg text-center text-gray-500">
                        تم استلام طلبك بنجاح
                        سيتم الرد عليك في أقرب وقت ممكن
                        شكراً لك
                        </p>
                    </div>

                    <div className="mt-4 justify-center mx-auto w-full">
                        <button
                        type="button"
                        className="inline-flex mx-auto w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >
                        شكرا
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
      </Transition>
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

                        <button disabled={loading} className='py-4 px-3 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-gray-600 duration-300 bg-gray-800 text-white rounded-lg w-full' >
                            {loading ? 
                            <ClipLoader color="#ffffff" loading={loading} cssOverride={override} size={30} /> :  'أرسل رسالتك الآن'   
                        }
                            </button>
                    </form>
                    <p>أو</p>
                    <a href='https://wa.me/0706883791' className='flex items-center justify-center space-x-1 bg-green-500 w-full rounded-lg text-white text-center duration-300 py-4 px-3 hover:bg-green-600' > 
                        <i className='bx bxl-whatsapp text-3xl'></i>  
                        <p>تواصل معنا عبر واتساب</p> </a>
                </div>
        </div>
    </>
  )
}

export default ContactInfo
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function index() {
    return (
        <div className="h-screen bg-slate-100 text-slate-900 flex justify-center">
            <div className="max-w-screen-xl min-w-full m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 px-6 py-8 sm:p-12 flex flex-col items-center ">
                    <div className='h-1/4 flex items-center justify-center'>
                        <Link href='/' >
                            <Image src="/logoBist.png"
                                className="mx-auto"
                                width={122}
                                height={122}
                                alt='logo bist website'
                            />
                        </Link>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="">
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-center mb-2">
                                ورود
                            </h1>
                            <Link href='/register' className='text-center'>
                                <span>حساب کاربری ندارید؟</span>
                            </Link>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-slate-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="mr-4">
                                        با گوگل
                                    </span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-slate-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    یا با شماره تلفن
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-slate-100 border border-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400 focus:bg-white"
                                    type="email" placeholder="شماره تلفن خود را وارد کنید" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-slate-100 border border-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400 focus:bg-white mt-5"
                                    type="password" placeholder="روز عبور خود را وارد کنید" />
                                <div className="h-9 flex items-center gap-2 mr-2">
                                    <input type="checkbox" name="rememberMe" id="rememberMe" className='accent-green-600' />
                                    <label htmlFor="rememberMe" className='text-slate-700 text-sm'>مرا به خاطر بسپار</label>
                                </div>
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-green-500 text-slate-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="mr-3">
                                        ورود
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-slate-600 text-center">
                                    من موافقت میکنم که
                                    {" "}
                                    <Link href="#" className="border-b border-slate-500 border-dotted">
                                        شرایط
                                    </Link>
                                    {" "}
                                    و
                                    {" "}
                                    <Link href="#" className="border-b border-slate-500 border-dotted">
                                        قوانین
                                    </Link>
                                    {" "}
                                    <Link href="#" className="border-b border-slate-500 border-dotted">
                                        وبسایت بیست
                                    </Link>
                                    {" "}
                                    را بپذیرم.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center hidden lg:flex">
                    <Image
                        src='/images/loginVector.svg'
                        width={1500}
                        height={1000}
                        alt='image'
                    />
                </div>
            </div>
        </div>
    )
}

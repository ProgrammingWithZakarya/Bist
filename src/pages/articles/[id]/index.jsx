import Breadcrumb from '@/components/breadcrumb'
import Layout from '@/components/layout'
import React from 'react'
import Image from "./../../../../public/images/bag.jpg"

// material icons
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
export default function index() {
    return (
        <Layout >
            <main className='p-3 grow max-w-full bg-slate-50 dark:bg-slate-950 '>
                <Breadcrumb links={[{ title: "مقاله ها", href: "/articles" }, { title: "فلان مقاله", href: "" }]} />
                <div className="flex flex-col bg-slate-200 dark:bg-slate-800  w-full rounded-lg p-6 my-3">
                    <article>
                        <header>
                            <section className='p-3'>
                                <div className="cover-wrapper">
                                    <img src={Image.src} alt="" className='w-full h-72 object-cover  rounded-lg' />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <h2 className='text-2xl md:text-4xl pt-2 mr-2 font-extrabold'>عنوان فلان مقاله </h2>
                                    <span>ارائه شده توسط فلانی</span>
                                </div>
                                <div className="boxes flex gap-2 flex-wrap justify-center items-center w-full rounded-lg bg-slate-100 dark:bg-slate-700 my-3 p-1">
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><PersonRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> ناشر :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg'>فلان فلانی</span>
                                        </div>
                                    </div>
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><CalendarMonthRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> در تاریخ :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg'>فلان فلانی</span>
                                        </div>
                                    </div>
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><AccessTimeFilledRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> مدن زمان مطالعه :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg'>فلان فلانی</span>
                                        </div>
                                    </div>
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><GroupsRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> مناسب برای  :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg'>فلان فلانی</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </header>
                        <main className='p-2'>
                            کارفرمای عزیز , این قسمت مربوط به محتوا و خلاقیت و سلیقه خدتون داره در قسمت پنل ادمین , موقع اپلود مقاله طبق نیازتون میتونید هر چی که دلتون بخواد بنویسید و در اینجا به نمایش در میاد .
                        </main>
                    </article>
                </div>
            </main>
        </Layout>
    )
}

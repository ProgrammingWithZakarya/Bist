import Breadcrumb from '@/components/breadcrumb'
import Layout from '@/components/layout'
import React from 'react'
import Image from "./../../../../../public/images/bag.jpg"

// material icons
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CommentsSection from '@/components/commentsSection';

export default function index() {
    return (
        <Layout >
            <main className='p-3 grow max-w-full bg-slate-50 dark:bg-inherit '>
                <Breadcrumb links={[{ title: "مقاله ها", href: "/grade/1" }, { title: "فلان درس", href: "" }]} />
                <div className="flex flex-col bg-slate-200 dark:bg-slate-800  w-full rounded-lg p-6 my-3">
                    <article>
                        <header>
                            <section className='p-3'>
                                <div className="cover-wrapper">
                                    <img src={Image.src} alt="" className='w-full h-72 object-cover  rounded-lg' />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <h2 className='text-2xl sm:text-4xl pt-2 mr-2 font-extrabold text-black dark:text-white'>عنوان فلان درس </h2>
                                    <span className='text-slate-950 dark:text-slate-50'>ارائه شده توسط فلانی</span>
                                </div>
                                <div className="boxes flex gap-2 flex-wrap justify-center items-center w-full rounded-lg bg-slate-100 dark:bg-slate-700 my-3 p-1">
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md ">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><PersonRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> مدرس :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg text-slate-950 dark:text-slate-50'>فلان فلانی</span>
                                        </div>
                                    </div>
                                    <div className="mini-box w-40 h-20 bg-slate-200 dark:bg-slate-800  p-2 rounded-md ">
                                        <div className="box-header flex gap-2 items-center ">
                                            <div className="icon-wrapper"><MenuBookRoundedIcon className='text-green-600 dark:text-green-500' /></div>
                                            <span className='text-base text-slate-900 dark:text-white font-bold'> تعداد فصل ها  :</span>
                                        </div>
                                        <div className="box-content pt-2 text-center ">
                                            <span className='text-lg text-slate-950 dark:text-slate-50'> 4 فصل</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </header>
                        <main className='p-2 text-black dark:text-white'>
                            کارفرمای عزیز , این قسمت مربوط به محتوا و خلاقیت و سلیقه خدتون داره در قسمت پنل ادمین , موقع اپلود مقاله طبق نیازتون میتونید هر چی که دلتون بخواد بنویسید و در اینجا به نمایش در میاد .
                        </main>
                    </article>

                    <CommentsSection />
                </div>
            </main>
        </Layout>
    )
}

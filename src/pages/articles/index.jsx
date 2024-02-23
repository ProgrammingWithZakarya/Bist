import Breadcrumb from '@/components/breadcrumb'
import Layout from '@/components/layout'
import SectionHeader from '@/components/sectionHeader'
import React from 'react'
import Image from "./../../../public/images/book.jpg"
import { useRouter } from 'next/router'
export default function Index() {
  const router = useRouter();
  return (
    <Layout >
      <main className='p-3 grow max-w-full bg-slate-50 dark:bg-[#070d18]'>
        <Breadcrumb links={[{ title: "مقاله ها", href: "/articles" }]} />
        <div className="flex flex-col bg-slate-200 dark:bg-slate-800  w-full rounded-lg p-6 my-3">
          <SectionHeader title={"همه مقاله ها"} />
          <div className=' w-full my-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  row-auto gap-5 justify-center'>
            {Array(5).fill(1).map((articleItem, Index) => (
              <article key={Index} className='bg-green-100 h-96 rounded-lg flex flex-col justify-between items-center hover:-translate-y-1 transition-transform'>
                <div className="">
                  <div className="image-wrapper p-2 overflow-hidden ">
                    <img src={Image.src} alt="" className='h-44 w-full object-cover rounded-md' />
                  </div>
                  <div className="articles-details p-3">
                    <h3 className='font-bold text-base'>
                      عنوان مقاله ..
                    </h3>
                    <p className='text-sm font-medium h-20'>
                      {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد".substring(0, 100)}...
                    </p>
                  </div>
                </div>
                <div className="btn-wrapper flex justify-between items-center h-10 w-full mb-2 px-2">
                  <div className='grow w-full flex flex-col gap-1 text-xs text-gray-900'>
                    <span>ارائه شده توسط <span className='hover:text-black'>علی محمدی اقدم</span></span>
                    <span>21 روز پیش</span>
                  </div>
                  <button className='w-24 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors' onClick={() => router.push('/articles/2')}>ادامه مقاله</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

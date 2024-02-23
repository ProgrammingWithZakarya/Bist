import Breadcrumb from '@/components/breadcrumb'
import Layout from '@/components/layout'
import SliderContainer from '@/components/sliderContainer'
import React from 'react'

export default function Index() {
  return (
    <Layout >
      <main className='p-3 grow max-w-full bg-slate-50 dark:bg-[#070d18]'>
        <Breadcrumb links={[{ title: "دسته بندی نهم", href: "/grade" }]} />
        <section className='my-4'>
          <SliderContainer title={"کتاب ها"} desc={"کتاب های مرتبط با مقطع تحصیلی شما"} />
        </section>
        <section className='my-4'>
          <SliderContainer title={"موضوعات گنگ و مهم"} desc={"تمرین مفاهیمی که تقریبا برای همه گنگ است:)"} />
        </section>
      </main>
    </Layout>
  )
}

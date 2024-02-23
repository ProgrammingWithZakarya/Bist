import Breadcrumb from '@/components/breadcrumb'
import Layout from '@/components/layout'
import SliderContainer from '@/components/sliderContainer'
import { useParams } from 'next/navigation'
import React from 'react'

export default function index() {
    const params = useParams()
    console.log('params:', params)
    return (
        <Layout >
            <main className='p-3 grow max-w-full bg-slate-50 dark:bg-[#070d18] '>
                <Breadcrumb links={[{ title: params?.searchTitle, href: `/${params?.searchTitle}` }]} />
                <section className='my-4'>
                    <SliderContainer title={"کتاب ها"} desc={"کتاب های مرتبط با چیزی که جستجو کردین ."} />
                </section>
                <section className='my-4'>
                    <SliderContainer title={"موضوعات دیگر"} desc={"موضوعات مرتبط با چیزی که جستجو کردین :)"} />
                </section>
            </main>
        </Layout>
    )
}

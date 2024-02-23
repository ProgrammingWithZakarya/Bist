import { sidebarSection } from "@/data/data";
import Link from "next/link";
import React from "react";
import Sidebar from "./sidebar";
import Breadcrumb from "./breadcrumb";
import SliderContainer from "./sliderContainer";
import About from "./about";

export default function MainSection() {
    return (

        <main className='p-3 grow max-w-full bg-slate-50 dark:bg-inherit '>
            <Breadcrumb />
            <section className='my-4'>
                <SliderContainer title={"آخرین مطالب"} desc={"ببین چی به این تازکی اومده !!"} />
            </section>
            <About />
            <section className='my-4'>
                <SliderContainer title={"مرتبط با شما"} desc={"مطالبی بهت مرتبطه جدا کردیم :)"} />
            </section>
            <section className='my-4'>
                <SliderContainer title={"آخرین مقاله ها"} desc={"مقاله بخون تا بروز باشی "} />
            </section>
            <section className='my-4'>
                <SliderContainer title={"آخرین مطالب"} desc={""} />
            </section>
            <section className='my-4'>
                <SliderContainer title={"آخرین مطالب"} desc={""} />
            </section>
        </main>
    );
}

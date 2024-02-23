import React from 'react'
import SectionHeader from './sectionHeader'

// material icons
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
export default function About() {
    return (
        <section className='about-us p-3 bg-slate-100 dark:bg-slate-700  w-full rounded-lg ' >
            <SectionHeader title={"ما چه کمکی بهتون میکنیم ؟"} desc={"بیا تا بهتون بگم :)"} />
            <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-3 p-2">
                {Array(4).fill(4).map((cardItem , index) => (
                    <div key={index} className="card backdrop-brightness-90 w-full sm:w-5/12 p-2 rounded-md">
                        <div className="flex gap-1 text-md font-medium">
                            <DoneRoundedIcon className='text-green-600 dark:text-green-500' />
                            <h6 className='font-semibold text-lg text-slate-900 dark:text-white'>صرفه جویی در زمان:</h6>
                        </div>
                        <div className="more-desc">
                            <p className='h-full w-full text-md text-justify text-slate-900 dark:text-slate-100'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

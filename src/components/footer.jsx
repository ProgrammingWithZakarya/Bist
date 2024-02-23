import { footer } from "@/data/data";
import Link from "next/link";
import Telegram from '../../public/socialNetworks/telegram.svg'
import WhatsApp from '../../public/socialNetworks/whatsapp.svg'
import Instagram from '../../public/socialNetworks/instagram.svg'
import CafeBazar from '../../public/socialNetworks/CafeeBazar.png'

// material Icons 
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { useState } from "react";
export default function Footer() {
    const [email, setEmail] = useState();

    const submitEmailHandler = e => {
        e.preventDefault();
        setEmail("");
        console.log("ایمیل ثبت شد...")
    }
    return (

        <footer className='footer w-full bg-slate-300 dark:bg-slate-700 flex flex-col  justify-start items-center gap-7 ' id='footer'>
            <div className="social-sec flex justify-center md:justify-between items-center flex-wrap gap-16 pt-5">
                <div className="networks flex gap-2 justify-between items-center">
                    <div className="">
                        <span className="text-slate-950 dark:text-slate-50">بیست را در شبکه های اجتماعی دنبال کنید:</span>
                    </div>
                    <div className="flex items-center justify-start ">
                        <Link href={'/'} className="hover:brightness-90">
                            <img src={Telegram.src} alt="" className="h-7" />
                        </Link>
                        <Link href={'/'} className="hover:brightness-90">
                            <img src={Instagram.src} alt="" className="h-7" />
                        </Link>
                        <Link href={'/'} className="hover:brightness-90">
                            <img src={WhatsApp.src} alt="" className="h-7" />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <span className="text-slate-950 dark:text-slate-50">بیست را روی گوشیتون نصب کنید:</span>
                    </div>
                    <div className="rounded-lg border-black border-2">
                        <a target="_blank" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiBnKfSo6aDAxVC7rsIHb5ECUMQFnoECA4QAQ&url=https%3A%2F%2Fcafebazaar.ir%2Fapp%2Fcom.example.bist&usg=AOvVaw3VmDiOOAIM6sktV0KvO4QL&opi=89978449">
                            <img src={CafeBazar.src} alt="" className="h-8" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-sec flex justify-center items-center flex-wrap gap-7">
                <div className="w-1/2 text-black dark:text-white">
                    <span>درباره ما:</span>
                    <p className="text-sm font-thin mt-2 text-justify text-slate-950 dark:text-slate-50">
                        بیست یکی از معتبرترین و بروزترین وبسایت‌های آموزش آنلاین در ایران است که با بهره‌گیری از مدرسین مجرب و متخصص تلاش می‌کند تا بهترین و با کیفیت‌ترین آموزش‌ها را در رشته‌های معماری، عمران و گرافیک و ...در اختیار مخاطبین خود قرار دهد. تولید ویدیوها، مقالات و پادکست‌های آموزشی به همراه برگزاری سمینارهای تخصصی تنها گوشه‌ای از فعالیت‌های بیست است.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-slate-950 dark:text-slate-50">برای اطلاع رسانی در جدیدترین مطالب درسی , ایمیل خود را وارد کنید.</span>
                    <form onSubmit={submitEmailHandler} className="email-box flex justify-between items-center p-1 rounded-md bg-white dark:bg-slate-800  max-w-xs">
                        <input
                            type="email"
                            className="border-none outline-none bg-white dark:bg-slate-800  px-2"
                            placeholder="ایمیل خود را وارد کنید."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button
                            className="bg-green-600 text-sm font-bold py-1 px-3 rounded-sm text-white"
                            type="submit"
                        >
                            ثبت
                        </button>
                    </form>
                </div>
                <div className=""></div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch gap-3">
                {footer.map(footerSec => (
                    <div className="flex-1 min-w-max w-72  bg-slate-200 dark:bg-slate-800  p-3 rounded-lg" key={footerSec.id}>
                        <div className="">
                            <h6 className="text-slate-950 dark:text-slate-50 text-base">{footerSec.title}</h6>
                            <span className="h-0.5 rounded-md l w-24 bg-green-600 block"></span>
                        </div>
                        <nav>
                            <ul className="mr-2 mt-2">
                                {footerSec.links.map(linkItem => (
                                    <li key={linkItem.id} className="text-sm text-slate-800 mb-1 hover:text-black dark:text-slate-200 dark:hover:text-white">
                                        <Link href={linkItem.href}>{linkItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                ))}
                <div className="flex-1 min-w-max w-72 bg-slate-200 dark:bg-slate-800  p-3 rounded-lg " >
                    <div className="">
                        <h6 className="text-slate-950 dark:text-slate-50 text-base">تماس با ما:</h6>
                        <span className="h-0.5 rounded-md l w-24 bg-green-600 block"></span>
                    </div>
                    <p className="text-xs font-thin mt-2 text-slate-950 dark:text-slate-50">برای ارتباط با ما می توانید از روش های زیر استفاده کنید.</p>
                    <nav>
                        <ul className="mr-2 mt-2">
                            <li className="text-xs text-slate-800 mb-1 hover:text-black dark:text-slate-200 dark:hover:text-white">
                                <span><LocalPhoneRoundedIcon className="text-green-600 dark:text-green-500 ml-5  " /></span>
                                <Link href="">شماره تماس: 09057053113 (از 9 صبح تا 5 عصر)</Link>
                            </li>
                            <li className="text-xs text-slate-800 mb-1 hover:text-black dark:text-slate-200 dark:hover:text-white">
                                <span><EmailRoundedIcon className="text-green-600 dark:text-green-500 ml-5" /></span>
                                <Link href="">شماره تماس: 09057053113 (از 9 صبح تا 5 عصر)</Link>
                            </li>
                            <li className="text-xs text-slate-800 mb-1 hover:text-black dark:text-slate-200 dark:hover:text-white">
                                <span><LocationOnRoundedIcon className="text-green-600 dark:text-green-500 ml-5  " /></span>
                                <Link href="">شماره تماس: 09057053113 (از 9 صبح تا 5 عصر)</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div className="w-full bg-green-600 dark:bg-green-700 text-white flex justify-center items-center font-thin text-sm py-2 px-4">
                <span>
                    کلیه حقوق مادی و معنوی از جمله محصولات و محتوای اين سایت متعلق به
                    <strong className="font-bold underline"> بیست </strong>
                    می‌باشد و هر گونه کپی‌برداری از محتوا و محصولات سایت غیرمجاز و بدون رضایت ماست.
                </span>
            </div>
        </footer>
    )
}

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SubNavbar from './subNavbar';
import { navbar } from '@/data/data';
import Logo from './../../public/logoBist.png'

// material icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

export default function Navbar() {
    const router = useRouter();
    const [isShowSearchMain, setIsShowSearchMain] = useState(false);
    const [searchContent, setSearchContent] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    const [isShowPersonDetailsCard, setIsShowPersonDetailsCard] = useState(false);

    useEffect(() => {
        localStorage.getItem('theme') === "dark" ? setIsDarkMode(true) : setIsDarkMode(false);
        darkModeHandler()
    }, [])
    const searchHandler = e => {
        e.preventDefault();
        setIsShowSearchMain(false);

        console.log("در حال جستجو " + searchContent)
        router.push(`/search/${searchContent}`)

        setSearchContent("")
    }
    const darkModeHandler = () => {

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        } else {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        }
    }

    return (
        <>
            <div className={`absolute inset-0 h-screen w-screen search-main z-[999999] ${!isShowSearchMain && "hidden"}`}>
                <div className="w-full h-[30%] flex items-start justify-start p-24 ">
                    <button
                        className='w-10 h-10 rounded-full bg-red-500 transition-colors text-white hover:bg-red-600 '
                        onClick={() => setIsShowSearchMain(false)}>
                        <CloseRoundedIcon />
                    </button>
                </div>
                <div className="w-full h-[70%] flex items-start justify-center">
                    <form className="search-box w-[500px] h-12 rounded-lg bg-white dark:bg-slate-800  overflow-hidden flex justify-between p-2" onSubmit={searchHandler}>
                        <input
                            type="text"
                            placeholder='چی میخوای اینجا بنویس...'
                            className='border-none outline-none grow bg-transparent dark:text-white'
                            value={searchContent}
                            onChange={e => setSearchContent(e.target.value)}
                            required
                        />
                        <button
                            type='submit'
                            className='bg-green-600 px-3 py-1 rounded-md text-white text-base hover:brightness-90'
                        >
                            جستجو
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-screen h-14 dark:bg-[#070d189d] backdrop-blur-lg flex justify-center items-center fixed top-0 z-[99999] px-6' id='#top'>
                <div>
                    <Link href={'/'} className='flex items-end logo-wrapper' >
                        <figure>
                            <img src={Logo.src} alt="logo_Bist.ir" className='h-14 mix-blend-darken scale-105 ' />
                        </figure>
                        <h2 className='text-green-600 dark:text-green-500 text-2xl font-bold'>بیست</h2>
                    </Link>
                </div>
                <nav className='grow h-full items-stretch'>
                    <ul className='h-full w-full hidden xl:flex justify-center items-center gap-4 '>
                        <li className={`navbar-link text-white h-full p-4 transition-all `}>
                            <Link href={'/'} className='text-xl text-[#070d18] dark:text-slate-50 font-bold px-2 py-1 hidden xl:inline '>ابتدایی
                                <KeyboardArrowDownRoundedIcon />
                            </Link>
                            <div className={`sub-navbar-content-wrapper absolute top-14 left-0 right-0 w-screen flex justify-center items-center`}>
                                <div className="flex justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-800  m-12 p-3">
                                    <SubNavbar list={navbar.elementary} forMobile={isShowMobileMenu} />
                                </div>
                            </div>
                        </li>
                        <li className={`navbar-link text-white h-full p-4 transition-all`}>
                            <Link href={'/'} className='text-xl text-[#070d18] dark:text-slate-50 font-bold px-2 py-1 hidden xl:inline' >متوسطه اول
                                <KeyboardArrowDownRoundedIcon />
                            </Link>
                            <div className={`sub-navbar-content-wrapper absolute top-14 left-0 right-0 w-screen flex justify-center items-center`}>
                                <div className="flex justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-800  m-12 p-3">
                                    <SubNavbar list={navbar.firstHighSchool} forMobile={isShowMobileMenu} />
                                </div>
                            </div>
                        </li>
                        <li className={`navbar-link text-white h-full p-4 transition-all`}>
                            <Link href={'/'} className='text-xl text-[#070d18] dark:text-slate-50 font-bold px-2 py-1 hidden xl:inline' >متوسطه دوم
                                <KeyboardArrowDownRoundedIcon />
                            </Link>
                            <div className={`sub-navbar-content-wrapper absolute top-14 left-0 right-0 w-screen flex justify-center items-center`}>
                                <div className="flex justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-800  m-12 p-3">
                                    <SubNavbar list={navbar.secondary} forMobile={isShowMobileMenu} />
                                </div>
                            </div>
                        </li>
                        <li className={`navbar-link text-white h-full p-4 transition-all`}>
                            <Link href={'/'} className='text-xl text-[#070d18] dark:text-slate-50 font-bold px-2 py-1 hidden xl:inline '>کنکور
                                <KeyboardArrowDownRoundedIcon />
                            </Link>
                            <div className={`sub-navbar-content-wrapper absolute top-14 left-0 right-0 w-screen flex justify-center items-center`}>
                                <div className="flex justify-center items-center rounded-lg bg-slate-200 dark:bg-slate-800  m-12 p-3">
                                    <SubNavbar list={navbar.elementary} forMobile={isShowMobileMenu} />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div
                        className={`xl:hidden absolute right-0 top-0 h-screen w-60 translate-x-full bg-green-600 overflow-x-hidden overflow-y-auto transition-all z-[99999] px-3 py-4
                     ${isShowMobileMenu && 'show-menu-for-small-screen'}`}
                    >
                        <div className="navbar-header h-16 flex justify-between ">
                            <Image
                                src='/logoBist.png'
                                width={64}
                                height={64}
                                className='object-cover '
                                alt='image'
                            />
                            <span className='p-4 rounded-full' onClick={() => setIsShowMobileMenu(false)}>
                                <CloseRoundedIcon />
                            </span>
                        </div>
                        {Object.entries(navbar).map(([navbarTitle, navbarContent], index) => {
                            // console.log(index)
                            return (
                                <nav key={navbarTitle} className='py-2'>
                                    <span
                                        className='section-title flex justify-between items-center w-full bg-gray-200 hover:brightness-90 rounded-sm px-2 py-1 '>
                                        <Link href={`/grade/${index + 1}`}>
                                            {navbarContent.title}
                                        </Link>
                                        <button
                                            type='button'
                                            onClick={e => e.currentTarget.parentElement.parentElement.children[1].classList.toggle("accordion-open")}>
                                            <KeyboardArrowDownRoundedIcon />
                                        </button>
                                    </span>
                                    <ul className='transition-all overflow-hidden h-0 bg-gray-100'>
                                        {navbarContent.links.map(linkItem => (
                                            <li key={linkItem.id} className='bg-gray-100 mt-2 py-1 px-2 rounded-sm transition-all duration-75 hover:brightness-75'>
                                                <Link href={linkItem.href}>
                                                    {linkItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )
                        })}
                    </div>
                </nav>
                <div className="options flex gap-2 text-white pl-2 relative">
                    <button
                        className='flex items-center justify-center gap-1 bg-green-600 rounded-md h-9 w-9 md:w-auto overflow-hidden px-2 py-1 font-medium hover:brightness-90 xl:hidden'
                        onClick={() => setIsShowMobileMenu(!isShowMobileMenu)} >
                        <span className='hidden md:inline'>منو</span>
                        <span className='icon-wrapper bg-green-600'>
                            <MenuRoundedIcon />
                        </span>
                    </button>
                    <button
                        className='flex items-center justify-center gap-1 bg-green-600 rounded-md h-9 w-9 md:w-auto overflow-hidden px-2 py-1 font-medium hover:brightness-90'
                        onClick={darkModeHandler} >
                        <span className='hidden md:inline'>
                            حالت {" "}
                            {!isDarkMode ? 'تاریک' : 'روشن'}
                        </span>
                        <span className='icon-wrapper bg-green-600'>
                            {!isDarkMode ? (
                                <NightlightRoundedIcon />
                            ) : (
                                <LightModeRoundedIcon />
                            )}
                        </span>
                    </button>
                    <button
                        className='flex items-center justify-center gap-1 bg-green-600 rounded-md h-9 w-9 md:w-auto overflow-hidden px-2 py-1 font-medium hover:brightness-90'
                        onClick={() => {
                            router.push('/#top')
                            setIsShowSearchMain(true)
                        }}>
                        <span className='hidden md:inline'>جستجو</span>
                        <span className='icon-wrapper bg-green-600'><SearchRoundedIcon /></span>
                    </button>
                    <button
                        className="flex items-center justify-center gap-1 bg-green-600 rounded-md h-9 w-9 md:w-auto overflow-hidden px-2 py-1 font-medium hover:brightness-90"
                        onClick={() => setIsShowPersonDetailsCard(!isShowPersonDetailsCard)}>
                        <span className='hidden md:inline'>آقای سعید محمدی</span>
                        <span className='icon-wrapper bg-green-600'><PersonRoundedIcon /></span>
                    </button>
                    <div className={`${!isShowPersonDetailsCard && 'hidden'} w-40 h-52 bg-green-600 rounded-lg absolute top-12 left-0 p-3 flex flex-col justify-between `}>
                        <div className="header-card border-b-2 ">
                            <Image
                                src='/images/user.svg'
                                width={50}
                                height={50}
                                className='rounded-full mx-auto'
                                alt='image'
                            />
                            <span className='block text-center'>آقای فلان فلانی </span>
                        </div>
                        <div className="main-card grow text-center mt-3">
                            <span className='block py-1 px-3 rounded-md hover:bg-green-700'>فعالیت های شما</span>
                        </div>
                        <div className="footer-card">
                            <span className='block py-1 px-1 rounded-md hover:bg-red-700 transition-colors'>
                                <MeetingRoomRoundedIcon />
                                <span className='text-xs mr-'>از حساب خارج شوید</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

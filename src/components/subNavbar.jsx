import Link from 'next/link'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Book from "./../../public/images/book.jpg"
import Lamp from './../../public/images/lamp.png';
export default function SubNavbar({ list }) {
    return (
        <div>
            <nav className="flex gap-4 items-stretch h-full">
                <ul className='links flex flex-col gap-1 p-3 grow' >
                    {list.links.map((linkItem, index) => index <= 5 && (
                        <li key={index} className='bg-green-100 dark:bg-green-200 md:w-52 sm:w-24 px-2 py-1 flex items-center rounded-lg justify-between hover:-translate-x-1 transition-transform hover:shadow-md'>
                            <Link href={index <= 4 ? linkItem.href : "/"} className='w-full flex gap-2 items-center justify-between text-green-500 dark:text-green-900 text-xs font-semibold hover:underline'>
                                <div className='flex gap-2 items-center'>
                                    <img src={Lamp.src} alt={linkItem.title} className='small-image-link-navbar rounded-md h-6 hidden md:inline' />
                                    {index <= 4 ? linkItem.title : "بیشتر"}
                                </div>
                                <div className="icon-wrapper for-navbar bg-green-300 text-green-600 dark:text-green-900 ">
                                    <KeyboardArrowLeftRoundedIcon className='text-green-600 dark:text-green-500 hidden md:block' />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={`cards w-full gap-2 flex items-center flex-wrap `}>
                    {list.cards.map((cardItem, index, arr) => index <= 4 && (
                        <li className='card' key={index}>
                            <div className='flex flex-col gap-1 sm:w-24 lg:w-32 h-52 bg-green-100 dark:bg-green-200 flex-nowrap rounded-lg overflow-hidden relative'>
                                <div className="image-wrapper h-28 w-full overflow-hidden p-2">
                                    <img src={Book.src} alt={cardItem.title} className='object-cover h-full w-full rounded-md' />
                                </div>
                                <div className="details-wrapper px-3">
                                    <h6 className='text-green-700 dark:text-black sm:text-sm md:text-base font-semibold'>
                                        <Link href={cardItem.href}>{cardItem.title}</Link>
                                    </h6>
                                    <p className='indent-1.5 sm:text-xs md:text-sm text-green-500 dark:text-green-900 font-semibold'>{cardItem.shortDesc}</p>
                                </div>
                                <div className="overlay absolute inset-0 flex justify-center items-center overflow-hidden backdrop-blur-sm">
                                    <Link href={cardItem.href}>
                                        <span className='px-2 py-1 rounded-md text-center bg-green-300 text-green-700'>
                                            بیشتر
                                            <KeyboardArrowLeftRoundedIcon />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                    {list.cards.length > 5 && (
                        <li className=''>
                            <Link href={"/"} className='flex flex-col justify-center items-center h-52 lg:w-16 bg-green-100 dark:bg-green-200 rounded-lg hover:bg-green-300 transition-colors'>
                                <span className='w-9 h-9 rounded-full bg-green-100 dark:bg-green-200 icon-wrapper'>
                                    <KeyboardDoubleArrowLeftRoundedIcon className=' text-green-500' />
                                </span>
                                <span className='font-semibold text-lg text-green-500 vertical-lr'>بیشتر</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
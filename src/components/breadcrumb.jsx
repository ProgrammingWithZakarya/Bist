import Link from 'next/link'
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'

// The Breadcrumb component takes in a list of links and renders a breadcrumb navigation
export default function Breadcrumb({ links = [] }) {
    return (
        <section>
            {/* Wrapper div with bg-color, rounded corners, and padding */}
            <div className="px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-800 ">
                {/* Navigation section with the list of links */}
                <nav>
                    <ul className='flex text-sm'>
                        {/* First list item contains a link to the home page */}
                        <li className='flex gap-1'>
                            <Link href={'/'} className='flex gap-1 items-center' >
                                <HomeRoundedIcon className='icon-wrapper text-green-600 dark:text-green-500 bg-slate-50 dark:bg-slate-950 ml-1 p-px' />
                                <span className='font-bold text-black dark:text-white'>خانه</span>
                            </Link>
                            {/* If there are links in the list, add a left arrow icon */}
                            {links.length !== 0 && <KeyboardArrowLeftRoundedIcon className='text-black dark:text-white' />}
                        </li>
                        {/* Map over the list of links and create a list item for each one */}
                        {links.map((linkItem, index) => (
                            <li key={linkItem.title} className='flex gap-1'>
                                <Link href={!Boolean(linkItem.href) ? "/" : linkItem.href}>
                                    <span className='text-slate-950 dark:text-slate-50'>{linkItem.title}</span>
                                </Link>
                                {/* If this is not the last link in the list, add a left arrow icon */}
                                {(index + 1) !== links.length && <KeyboardArrowLeftRoundedIcon className='text-black dark:text-white' />}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    )
}
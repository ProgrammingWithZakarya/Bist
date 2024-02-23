import React from 'react'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Link from 'next/link';

// material icons
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
export default function Sidebar({ sidebarSection = [] }) {
  return (
    <aside className='bg-slate-200 dark:bg-slate-800 w-auto md:w-max h-full min-w-max p-3 overflow-x-hidden overflow-y-auto mt-3 rounded-lg '>
      <h4 className='font-bold text-lg mb-4 mr-3 flex gap-1 w-full'>
        <span className='icon-wrapper bg-slate-50 dark:bg-slate-950 text-green-600 dark:text-green-500 '><ReorderRoundedIcon /></span>
        <span className='text-black dark:text-white'>میانبر</span>
      </h4>
      <div className="flex justify-center items-stretch md:block">
        {sidebarSection.map((section ,index) => (
          <div className='mb-3 w-full' key={index}>
            <h6 className='flex items-center gap-2  text-slate-950 dark:text-slate-50'><span className='w-2 h-2 rounded-full bg-green-600'></span> {section.title}</h6>
            {
              section.contents.map((subSection, index) => (
                <section key={subSection.id} className={`accordion overflow-hidden mb-1 p-1 ${index === 0 && "accordion-open"}`}>
                  <div
                    className='flex gap-2 items-center cursor-pointer backdrop-brightness-90 rounded-md px-1'
                    onClick={e => e.currentTarget.parentElement.classList.toggle("accordion-open")}
                  >
                    <span className="icon-wrapper arrow-accordion transition-transform text-black dark:text-white"><KeyboardArrowLeftRoundedIcon /></span>
                    <h4 className='text-lg text-slate-900 dark:text-slate-100'>{subSection.title}</h4>
                  </div>
                  <nav >
                    <ul className='my-2 mr-3'>
                      {subSection.links.map(linkItem => (
                        <li key={linkItem.id} className='mb-1 hover:backdrop-brightness-90 py-1 px-2 rounded'>
                          <div>
                            <Link href={linkItem.href} className='flex justify-between items-center text-xs text-gray-900 dark:text-gray-100 line-clamp-1'>
                              <span>{linkItem.title}</span>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </section>
              ))
            }
          </div>
        ))}
      </div>
    </aside>
  )
}

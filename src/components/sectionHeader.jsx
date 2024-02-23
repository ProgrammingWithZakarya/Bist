import React from 'react'

export default function SectionHeader({ title, desc }) {
    return (
        <div className="section-header py-1 px-3 mb-2 border-b-2 border-slate-300 dark:border-slate-500">
            <h3 className='font-bold text-lg relative text-black dark:text-white'>{title}</h3>
            <p className='text-sm font-semibold h-4 mr-1 text-slate-900 dark:text-slate-100'>{desc}</p>
        </div>
    )
}

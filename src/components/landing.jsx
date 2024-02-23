import React from 'react'
export default function Landing() {
  return (
    <div className='landing w-full bg-no-repeat flex justify-center items-center'>
      <div>
        <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl text-center text-gray-300  '>بهترین مطالب درسی رو مجموعه <span className='text-green-500'>بیست</span>  بخواه ¯\_(ツ)_/¯</h1>
      </div>
      <a href='#main' className="scroll h-14 w-6 rounded-2xl border-white border-2 absolute flex justify-center p-1 bottom-8 left-1/2 ">
        <div className="mouse w-2 h-2 rounded-full bg-white dark:bg-slate-800 "></div>
      </a>
    </div>
  )
}

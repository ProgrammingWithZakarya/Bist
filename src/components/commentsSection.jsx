import Image from 'next/image'
import React, { useState } from 'react'

// material icons 
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
export default function CommentsSection() {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <>
            <form>
                <div class="flex items-center px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                    <button type="button" class="inline-flex justify-center p-2 text-slate-500 rounded-lg cursor-pointer hover:text-slate-900 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-600">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                        </svg>
                        <span class="sr-only">بارگذاری عکی</span>
                    </button>
                    <textarea
                        id="chat"
                        rows="1"
                        class="block mx-4 p-2.5 w-full text-sm text-slate-900 bg-white rounded-lg border border-slate-300 
                                focus:ring-green-500 focus:border-green-500 dark:bg-slate-800 dark:border-slate-600
                                 dark:placeholder-slate-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="نظرتون رو اینجا بنویسید..."></textarea>
                    <button type="submit" class="inline-flex justify-center p-2 text-green-600 dark:text-green-500 rounded-full cursor-pointer hover:bg-green-100 dark:text-green-500 dark:hover:bg-slate-600">
                        <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span class="sr-only">ارسال نظر</span>
                    </button>
                </div>
            </form>
            <div className='comments-section w-full h-auto mt-3'>
                <h6 className='text-xl font-bold text-black dark:text-white' >نظرات</h6>
                <div className="comments-wrapper flex flex-col w-full h-auto mt-2">
                    <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-500 p-3 mt-4 rounded-lg ">
                        <div className="avatar-wrapper w-14">
                            <Image
                                src='/favicon.ico'
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='image'
                            />
                        </div>
                        <div className="comment-content">
                            <div className="comment-header flex justify-between h-fit">
                                <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                            </div>
                            <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="btn-wrapper mt-3 flex gap-2">
                                <button
                                    type='button'
                                    className='dark:text-white flex items-center'
                                    onClick={() => setIsLiked(!isLiked)}>
                                    <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                    <span>275 <span>نفر پسندیدند</span></span>
                                </button>
                                <button
                                    type='button'
                                    className='dark:text-white flex items-center'>
                                    <ReplyRoundedIcon />
                                    <span>150 <span> نظر دادند</span></span>
                                </button>
                            </div>
                            <div className="comments-replied mr-2 mt-2 pr-4 border-r-2 border-slate-400">
                                <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-400 mt-2 p-3 rounded-lg">
                                    <div className="avatar-wrapper w-14">
                                        <Image
                                            src='/favicon.ico'
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                            alt='image'
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-header flex justify-between h-fit">
                                            <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                            <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                                        </div>
                                        <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        </p>
                                        <div className="btn-wrapper mt-3 flex gap-2">
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'
                                                onClick={() => setIsLiked(!isLiked)}>
                                                <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                                <span>275 <span>نفر پسندیدند</span></span>
                                            </button>
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'>
                                                <ReplyRoundedIcon />
                                                <span>150 <span> نظر دادند</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-400 mt-2 p-3 rounded-lg">
                                    <div className="avatar-wrapper w-14">
                                        <Image
                                            src='/favicon.ico'
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                            alt='image'
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-header flex justify-between h-fit">
                                            <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                            <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                                        </div>
                                        <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        </p>
                                        <div className="btn-wrapper mt-3 flex gap-2">
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'
                                                onClick={() => setIsLiked(!isLiked)}>
                                                <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                                <span>275 <span>نفر پسندیدند</span></span>
                                            </button>
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'>
                                                <ReplyRoundedIcon />
                                                <span>150 <span> نظر دادند</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-500 p-3 mt-4 rounded-lg ">
                        <div className="avatar-wrapper w-14">
                            <Image
                                src='/favicon.ico'
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='image'
                            />
                        </div>
                        <div className="comment-content">
                            <div className="comment-header flex justify-between h-fit">
                                <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                            </div>
                            <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="btn-wrapper mt-3 flex gap-2">
                                <button
                                    type='button'
                                    className='dark:text-white flex items-center'
                                    onClick={() => setIsLiked(!isLiked)}>
                                    <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                    <span>275 <span>نفر پسندیدند</span></span>
                                </button>
                                <button
                                    type='button'
                                    className='dark:text-white flex items-center'>
                                    <ReplyRoundedIcon />
                                    <span>150 <span> نظر دادند</span></span>
                                </button>
                            </div>
                            <div className="comments-replied mr-2 mt-2 pr-4 border-r-2 border-slate-400">
                                <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-400 mt-2 p-3 rounded-lg">
                                    <div className="avatar-wrapper w-14">
                                        <Image
                                            src='/favicon.ico'
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                            alt='image'
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-header flex justify-between h-fit">
                                            <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                            <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                                        </div>
                                        <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        </p>
                                        <div className="btn-wrapper mt-3 flex gap-2">
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'
                                                onClick={() => setIsLiked(!isLiked)}>
                                                <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                                <span>275 <span>نفر پسندیدند</span></span>
                                            </button>
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'>
                                                <ReplyRoundedIcon />
                                                <span>150 <span> نظر دادند</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment flex gap-3 shadow-inner  shadow-slate-700 bg-slate-300 dark:bg-slate-800 dark:shadow-slate-400 mt-2 p-3 rounded-lg">
                                    <div className="avatar-wrapper w-14">
                                        <Image
                                            src='/favicon.ico'
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                            alt='image'
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-header flex justify-between h-fit">
                                            <h6 className="text-lg font-semibold text-green-600 grow">فلان فلانی</h6>
                                            <span className='text-slate-900 font-medium dark:text-white/50 text-sm'>3 روز پیش</span>
                                        </div>
                                        <p className='mt-2 text-slate-950 dark:text-slate-50'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        </p>
                                        <div className="btn-wrapper mt-3 flex gap-2">
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'
                                                onClick={() => setIsLiked(!isLiked)}>
                                                <FavoriteRoundedIcon className={`${isLiked && 'fill-red-600'} stroke-red-500 text-transparent`} />
                                                <span>275 <span>نفر پسندیدند</span></span>
                                            </button>
                                            <button
                                                type='button'
                                                className='dark:text-white flex items-center'>
                                                <ReplyRoundedIcon />
                                                <span>150 <span> نظر دادند</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

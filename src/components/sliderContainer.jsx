'use client';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from './../../public/images/book.jpg'
import { useRouter } from 'next/router';
import SectionHeader from './sectionHeader';
import { usePathname } from 'next/navigation';
import useSlidesPerView from '@/hooks/useSliderPreView';

// Creating the SliderContainer component
export default function SliderContainer({ title, desc }) {
  // Accessing the pathname using the usePathname hook
  const pathname = usePathname();
  // Accessing the router object using the useRouter hook
  const router = useRouter();

  // Using a state variable to store the number of slides per view
  const [sliderNum, setSliderNum] = useState(5);

  // Updating the number of slides per view on page load and window resize
  useEffect(() => {
    setSliderNum(useSlidesPerView());

    const resizeHandler = () => {
      setSliderNum(useSlidesPerView());
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('load', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('load', resizeHandler);
    };
  }, [pathname]);

  // Rendering the Swiper component with the necessary props and event listeners
  return (
    <div className=' w-full h-96 rounded-lg bg-slate-100 dark:bg-slate-700 p-2'>
      <SectionHeader title={title} desc={desc} />
      <Swiper
        spaceBetween={50}
        slidesPerView={sliderNum}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-5/6 pt-2"
        style={{ maxWidth: "75vw" }}
      >
        {Array(8).fill(5).map((sliderItem, index) => (
          <SwiperSlide key={index} className='w-16 h-full bg-green-200 dark:bg-green-700 p-2 rounded-lg overflow-hidden flex flex-col gap-1 items-center justify-between ' >
            <div className="flex flex-col h-[90%]">
              <div className="image-wrapper max-w-full rounded-md overflow-hidden">
                <img src={Image.src} alt="" className='w-full h-32 object-cover transition-transform hover:scale-110' />
              </div>
              <div className="card-details overflow-hidden grow p-1">
                <h3 className='font-bold text-base text-black dark:text-white'>عنوان کارت </h3>
                <p className='text-sm font-normal text-slate-900 dark:text-slate-100 '>توضیحات کارت توضیحات کارت توضیحات کارت توضیحات کارت توضیحات کارت </p>
              </div>
            </div>
            <div className="card-btns flex justify-center items-center">
              <button className='py-1 px-4 rounded bg-green-600 text-white text-xs hover:backdrop-brightness-75' onClick={() => router.push('/')}>ادامه...</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

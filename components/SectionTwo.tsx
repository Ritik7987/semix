"use client"
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
export const SectionTwo = () => {
    const [visible,setVisible] = useState(false);
    return (
    <div className='w-full h-[480px] bg-white'>
        <div className=' flex flex-col gap-6 p-12 justify-center '>
             <h1 className='text-4xl text-center font-bold text-black'> LOREM IPSUM</h1>
             <p className='text-center md:text-2xl text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab in quia harum reprehenderit. Ad inventore voluptate, impedit odit dolorem nostrum accusantium sit voluptas neque eos ex, hic perferendis dolores!</p>

             <p className={`text-center md:text-2xl text-sm ${visible ? "block":"hidden" }`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in asperiores a doloremque eius, amet exercitationem praesentium temporibus. Officia maxime maiores iure earum officiis nesciunt laudantium quidem illo excepturi molestias.</p>
             <button className=' transition-all md:block hidden duration-500 hover:text-purple-900 w-fit mx-auto rounded-full px-4 py-3 font-bold' onClick={()=>setVisible(!visible)}>
                {visible ? "Show less -" : "Show More +"}
             </button>
        </div>
        <div className='flex justify-center'>
            <button className='bg-purple-600 hover:bg-purple-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full flex items-center font-bold text-sm sm:text-base md:text-lg lg:text-xl'>
                <p>About us</p>
                <MdArrowOutward/>
            </button>
        </div>
    </div>
  )
}

"use client"

import { SectionThreItem } from '@/utils/SectionThreeItem';
import React, { useState } from 'react'
const imageUrl:string = "https://th.bing.com/th/id/OIP.2DZi9rihdeyczK6N3KmGYgAAAA?rs=1&pid=ImgDetMain";



export const SectionThree = () => {
    const [currentIndex,setCurentIndex] = useState(0);
    return (
    <div className='w-full h-[600px] bg-purple-900 text-white'>
        <div className='p-12 w-11/12 flex flex-col gap-16 mx-auto'>
            <h1 className='md:text-4xl text-2xl font-extrabold text-center'>Lorem IPsum Lorem Ipsum</h1>
            <div className='flex gap-x-16 '>
                
                
                <div className='w-[20%] gap-8 flex flex-wrap sm:flex-col'>
                    {
                        SectionThreItem.map((item,index)=>(
                            <h1 key={index} className={`font-bol flex items-center gap-6  md:text-2xl text-sm cursor-pointer ${index===currentIndex ? "text-white": "text-gray-500"} `} onClick={()=>setCurentIndex(index)}>
                                <div className={`w-[4px] h-4 ${index===currentIndex ? "bg-white":"bg-gray-500"} `}></div>
                                <p>{item.title}</p>
                            </h1>
                        ))
                    }
                </div>
                <div className='w-[50%] h-fit flex  justify-center'>
                    <img
                        src={SectionThreItem[currentIndex].imageUrl}
                    />
                </div>
                <div className='w-[20%] md:flex flex-col gap-y-8'>
                    <p className='font-bold md:block hidden text-2xl'>{SectionThreItem[currentIndex].subheading}</p>

                    <p className='md:block hidden'>{SectionThreItem[currentIndex].description}</p>

                    <button className="rounded-full sm:block hidden px-4 py-3 bg-transparent border w-fit">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

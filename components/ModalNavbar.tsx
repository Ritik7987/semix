import { NavItems } from '@/utils/Navbar_items'
import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
export const ModalNavbar = () => {
    
    

    return (
        <div className="absolute xxl:hidden  top-full w-screen h-[calc(100vh-5rem)] overflow-y-auto p-6 bg-purple-600 text-white z-40">

        <div className='flex flex-col top-5'>
            {NavItems.map((item,index)=>(
                <div className='flex gap-2 items-center py-2 h-[75px]'>
                    <div key={index} className='font-bold'>
                        {item.title}
                    </div>
                    <MdArrowOutward className='text-2xl'/>
                </div>
            ))}
        </div>
    </div>
  )
}

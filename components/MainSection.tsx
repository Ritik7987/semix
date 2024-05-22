"use client";
import { SectionOneItems } from '@/utils/MainSection_items';
import React, { useState } from 'react';

export const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SectionOneItems.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-[600px] flex flex-col gap-y-16 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="backdrop-blur-[44px] bg-white bg-opacity-10 py-6 px-5 w-full text-white">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt mollitia animi culpa, ipsa nisi cupiditate repellat, praesentium rem adipisci corporis sint eveniet nemo ratione similique fuga. Consequuntur rerum autem culpa?</p>
            </div>
            <div className="w-11/12 mx-auto text-white h-fit flex flex-col gap-7">
              <p className="text-4xl font-bold">IIT Bombay Nanofabrication Facility</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus architecto maiores.</p>
              <button className="rounded-full px-4 py-3 bg-transparent border w-fit sm:block hidden">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around gap-x-10 w-11/12 mx-auto absolute bottom-6 left-0 right-0">
        {SectionOneItems.map((item, index) => (
          <div key={index} className="text-white hidden md:flex flex-col  flex-wrap gap-6">
            <p onClick={() => setCurrentIndex(index)} className="cursor-pointer">{item.title}</p>
            <div className={`w-11/12 mx-auto h-[3px] bg-white ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
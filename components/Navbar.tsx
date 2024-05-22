"use client";
"use client";
import { IoMdSearch } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { NavItems } from "@/utils/Navbar_items";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { ModalNavbar } from "./ModalNavbar";
import { SearchModal } from "./SearchModal";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [openSubIndex, setOpenSubIndex] = useState<{ [key: number]: number | null }>({});

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
    setOpenSubIndex({});
  };

  const handleSubMouseEnter = (parentIndex: number, subIndex: number) => {
    setOpenSubIndex((prev) => ({
      ...prev,
      [parentIndex]: subIndex,
    }));
  };

  const handleSubMouseLeave = (parentIndex: number) => {
    setOpenSubIndex((prev) => ({
      ...prev,
      [parentIndex]: null,
    }));
  };

  return (
    <div className="bg-white w-full h-20 sm:h-24 md:h-28 flex sticky top-0 z-50 shadow-md">
      <div className="flex justify-between px-4 sm:px-6 md:px-8 lg:px-10 w-full items-center">
        <div className="flex flex-col w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
          <img
            src="/Semix-icon.png"
            className="w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14"
            alt="Logo"
          />
          <p className="hidden xxs:block text-[10px]">
            Centre for Semiconductor Technologies SEMIX
          </p>
        </div>
        <div className="flex w-2/3 sm:w-3/4 md:w-4/5 lg:w-5/6 justify-end items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <ul className="hidden xxl:flex items-center justify-end font-semibold space-x-4 lg:space-x-6">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="group cursor-pointer flex flex-col items-start relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
                <div className="transition-all h-1 bg-transparent duration-300 group-hover:bg-purple-600 w-full mt-1"></div>
                {openIndex === index && (
                  <div className={`absolute top-full left-0 shadow-lg bg-white flex justify-between ${item.imageUrl ? 'w-96 p-5' : 'w-48'}`}>
                    <div className={`flex flex-col ${item.imageUrl ? "" : "w-full"}`}>
                      <ul className="py-2">
                        {item.sublinks.map((sublink, subIndex) => (
                          <li
                            key={subIndex}
                            className="transition-all duration-300 hover:bg-purple-600 hover:text-white relative"
                            onMouseEnter={() => handleSubMouseEnter(index, subIndex)}
                            onMouseLeave={() => handleSubMouseLeave(index)}
                          >
                            {sublink.subsublinks ? (
                              <p className="flex items-center gap-2">
                                {sublink.title}
                                <IoIosArrowDown />
                              </p>
                            ) : (
                              <p>{sublink.title}</p>
                            )}
                            {sublink.subsublinks && openSubIndex[index] === subIndex && (
                              <ul className="absolute left-full top-0 bg-white shadow-lg w-48 py-2">
                                {sublink.subsublinks.map((subsublink, subsublinkIndex) => (
                                  <li key={subsublinkIndex} className="text-black hover:bg-purple-600 hover:text-white">
                                    {subsublink}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-auto max-w-48 mt-2"
                      />
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <IoMdSearch className="text-lg sm:text-xl md:text-2xl cursor-pointer" onClick={() => setSearchModal(true)} />
          {modal ? (
            <RxCross1 className="text-lg sm:text-xl md:text-2xl xxl:hidden block" onClick={() => setModal(false)} />
          ) : (
            <FaBars className="text-lg sm:text-xl md:text-2xl xxl:hidden block" onClick={() => setModal(true)} />
          )}
          <button className="bg-purple-600 hover:bg-purple-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full xxl:flex hidden items-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            <p>Get in Touch</p>
            <MdArrowOutward className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl" />
          </button>
        </div>
      </div>
      {modal && <ModalNavbar />}
      {searchModal && <SearchModal isOpen={true} onClose={() => setSearchModal(false)} />}
    </div>
  );
};
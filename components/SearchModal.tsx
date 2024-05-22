import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='w-screen h-20 sm:h-24 md:h-28 absolute flex items-center bg-purple-600'>
      <div className='w-[80%] mx-auto flex items-center justify-between h-[35%]'>
        <IoMdSearch className='text-2xl text-white cursor-pointer'/>
        <form className='w-[90%]'>
          <input type='text' className='bg-transparent focus:outline-none w-full text-white'/>
        </form>
        <RxCross1 className='text-2xl text-white cursor-pointer' onClick={onClose}/>
      </div>
    </div>
  );
};
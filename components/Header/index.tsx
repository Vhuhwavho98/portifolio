
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome} from 'react-icons/ai'
const Header: React.FC<{}>=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const handleHomeClick = (page:any) => {
        const Page = document.getElementById(page);
        
        if (Page) {
            Page.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const handlesClose=()=>{
        setIsOpen(!isOpen)
    }

    const Pages = ['Home', 'About', 'Contact'];
    return(
        <div className="p-2 w-full lg:h-[90px] h-[65px] bg-slate-100 pb-5">
            <div className='left-0 absolute'>
               <div className='relative'>
               <div className='left-1 p-[1px] h-[30px] lg:h-[50px]  leading-[30px] lg:w-[50px] w-[30px] text-center absolute text-[22px] bg-gray-500 font-bold text-white sm:text[21px] rounded-[50%]'>Ne </div>
               <div className='top-3.5 lg:top-5  left-4 lg:left-5  leading-[30px]  h-[30px] lg:h-[50px] mt-1 ml-1 lg:w-[50px] w-fit text-center font-bold absolute p-[1px] lg:p-2 rounded-[50%] text-white sm:text[21px] text[22px]  bg-gray-700'>Vhu</div>
               </div>
            </div>
         <div className="lg:hidden absolute right-0">
                {
                    !isOpen &&
                    (
                        <div className='right-0  py-4  pr-4' onClick={handlesClose}>
                        <AiOutlineMenu/>
                        </div>
                    )
                }
                {
                    isOpen &&
                    (
                         <div className='absolute right-0 top-5 mb-5 p-2 h-[70vh] w-[45vw] bg-slate-500 rounded-l-[25px] text-white'>
                            <div className='relative mb-2 right-0'>
                                <AiOutlineClose onClick={handlesClose} className='absolute right-0'/>
                            </div>
                            <div>
                                <ul className='pr-5'>
                                {Pages.map((page, index) => (
                                    <li className="flex" key={index} onClick={()=>{handleHomeClick(page)}}>
                                        {page}
                                    </li>
                                    ))}
                                </ul>
                             </div>   
                            </div>
                    )
                }
         </div>
         <div className='lg:block hidden absolute right-0'>
         <ul className='pr-5 mt-5 flex space-x-2'>                    
            {Pages.map((page, index) => (
                <li className="flex" key={index} onClick={()=>{handleHomeClick(page)}}>
                    {page}
                </li>
             ))}
         </ul>
         </div>
        </div>
      
        )
}

export default Header
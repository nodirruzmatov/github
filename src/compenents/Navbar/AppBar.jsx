import React from 'react';
import { NavLink } from "react-router-dom"

const AppBar = () => {
  return (
    <>
      <section className='appbar border-b-[1px] border-[#d8dee4]'>
        <div className=" container mx-auto flex justify-center pb-[7px] ">

          <ul className='flex'>
            
            <li >
              <NavLink className={({isActive})=>(isActive ?' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[600] border-b-[2px] border-[#fd8c73]':' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[500]')} to="/">Overview</NavLink>
            </li>

            <li >
              <NavLink className={({isActive})=>(isActive ?' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[600] border-b-[2px] border-[#fd8c73]':' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[500]')} to="/repositories">Repositories</NavLink>
            </li>

            <li >
              <NavLink className={({isActive})=>(isActive ?' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[600] border-b-[2px] border-[#fd8c73]':' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[500]')} to="/projects">Projects</NavLink>
            </li>

            <li >
              <NavLink className={({isActive})=>(isActive ?' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[600] border-b-[2px] border-[#fd8c73]':' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[500]')} to="/packages">Packages</NavLink>
            </li>

            <li  >
              <NavLink className={({isActive})=>(isActive ?' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[600] border-b-[2px] border-[#fd8c73]':' px-2 py-3 text-[14px] leading-[30px] text-[#24292f] font-[500]')} to="/stars">Stars</NavLink>
            </li>
          </ul>

        </div>
      </section>
    </>
  );
};

export default AppBar;
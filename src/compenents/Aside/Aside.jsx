import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom"
import UserContext from '../../useContext/useContext';

const Aside = (uesr) => {
  const {result} = useContext(UserContext);


  
  


  return (
    <>
      <aside className='aside'>
        <div className=' max-w-[296px]'>

          <img className=' rounded-[50%]' src={result.avatar_url} alt="" />

          <div className=' py-4'>
          <h2 className='text-[24px] leading-[1.25] font-medium'>{result.name}</h2>
          <p className='text-[20px] leading-[24px] text-[#57606a]'>{result.login}</p>
          </div>

          <div className="mb-4">
            <h3 className=' text-[16px]'>{result.bio}</h3>
            <button className=' w-full text-center py-[5px] px-4 border-[1px] border-[#1b1f2426] rounded-md bg-[#f6f8fa]'>Edit Profile</button>
          </div>

          <div className=" flex justify-start mb-4">

            <NavLink to='/followers' className=' mr-2 text-[14px] leading-[1.5] text-[#24292f] hover:text-[#0969da]'>{result.followers} followers</NavLink>

            <NavLink to='/following' className='text-[14px] leading-[1.5] text-[#24292f] hover:text-[#0969da]'>{result.following} following
            </NavLink>
          </div>

           <div className="">
            <p className=' pt-1 text-[14px] leading-[1.5] text-[#24292f]'>{result.company} </p>
            <p className=' pt-1 text-[14px] leading-[1.5] text-[#24292f]'>{result.location} </p>
            <p className=' pt-1 text-[14px] leading-[1.5] text-[#24292f]  hover:text-[#0969da] hover:underline'>{result.twitter_username} </p>
            <p className=' pt-1 text-[14px] leading-[1.5] text-[#24292f]  hover:text-[#0969da] hover:underline'>{result.blog} </p>
          </div>
          

        </div>
      </aside>
    </>
  );
};


export default Aside;
import React, { useState, createContext, useContext } from 'react';
import UserContext from '../../useContext/useContext';

const Aside = (uesr) => {
  const {result} = useContext(UserContext);
  console.log(result);

  return (
    <>
      <aside className='aside'>
        <div className=' max-w-[296px]'>

          <img className=' rounded-[50%]' src={result.avatar_url} alt="" />

          <div className=' py-4'>
          <h2 className='text-[24px] leading-[1.25] font-medium'>{result.name}</h2>
          <p className='text-[20px] leading-[24px] text-[#57606a]'>{result.login}</p>
          </div>

          <div className="">
            <h3 className=' text-[16px]'>{result.bio}</h3>
            <button className=' w-full text-center py-[5px] px-4 border-[1px] border-[#1b1f2426] rounded-md bg-[#f6f8fa]'>Edit Profile</button>
          </div>

          <div className=""></div>
          

        </div>
      </aside>
    </>
  );
};


export default Aside;
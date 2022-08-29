import React from 'react';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../useContext/useContext';
import Get from '../../Api/Get';

const Followers = () => {

  const {result, aa} = useContext(UserContext);

  const [over, setOver]=useState([])

  const srcGit = async(str)=>{

    const response = await Get.followers(str)
    
    setOver(response.data)
  }

  const firstGit = async()=>{
    const request = await Get.nodirFollowers()

    setOver(request.data)
  }

  useEffect(()=>{

    firstGit()
    srcGit(aa)
  },[])

  useEffect(()=>{

    srcGit(aa)
  },[aa])


  return (
    <>
      <section className='followers w-full pl-6'>
        <ul>

          {over.map((e)=>{
            return <li key={e.id} className=' py-6 border-b-[1px] border-[#d0d7de'>
              <a className=' flex justify-between items-center w-full' href={e.html_url}>

                <div className=" flex items-center">

                  <img className=' mr-6 rounded-[50%]' src={e.avatar_url} width={50} height={50} alt="avatar image" />

                  <div className="">
                    <h3 className=' text-[14px] leading-[1.5] text-[#57606a]'>{e.login}</h3>
                  </div>

                </div>

                <button className=' px-3 py-[3px] text-[#24292f] text-[12px] leading-5 bg-[#f6f8fa] border-[1px] border-[#1b1f2426] rounded-md'>Follow</button>

              </a>
            </li>
          })}

        </ul>
      </section>
      
    </>
  );
};

export default Followers;
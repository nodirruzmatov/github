import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import UserContext from '../../useContext/useContext';
import Get from '../../Api/Get';

const Overview = () => {

  const {result, aa} = useContext(UserContext);

  const [over, setOver]=useState([])

  const srcGit = async(str)=>{

    const response = await Get.userRepo(str)
    
    setOver(response.data.slice(0,6))
  }

  const firstGit = async()=>{
    const request = await Get.nodirRepo()

    setOver(request.data.slice(0,6))
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
      <section className='overview w-full'>
        <div className=" pt-6 w-full ml-6">

          <h2 className=' mb-2 text-[16px] leading-[1.5] font-[400]'>Popular repositories</h2>

          <ul className=' grid grid-cols-2 gap-4'>
            {over.map((e, index)=>{ 
              return   <li key={e.id} className=' px-2 mb-4  max-w-[456px] border-[1px] border-[#d0d7de] rounded-[6px]'>
                <a  href={e.svn_url} className='  p-4 flex flex-col justify-between'>
                  <div className='flex justify-between'>
                    <h3 className=' text-[14px] leading-[1.5] text-[#0969da] font-[600]'>{e.name}</h3>
                    <p className=' px-[7px] border-[1px] border-[#d0d7de] rounded-xl text-[14px] leading-[18px] text-[#57606a] font-[500]'>{e.visibility}</p>
                  </div>
                  <p className=' mt-2 mb-4 text-[12px] text-[#57606a] leading-[1.5] whitespace-normal' >{e.svn_url}</p>
                  <p className='text-[12px] text-[#57606a] leading-[1.5]'>{e.language}</p>
                </a>
                
              </li>
              }) }

          </ul>

        </div>
      </section>
    </>
  );
};

export default Overview;
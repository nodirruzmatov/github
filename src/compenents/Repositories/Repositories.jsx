import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import UserContext from '../../useContext/useContext';
import Get from '../../Api/Get';

const Repositories = () => {

  const {result, aa} = useContext(UserContext);

  const [over, setOver]=useState([])

  const srcGit = async(str)=>{

    const response = await Get.userRepo(str)
    
    setOver(response.data)
  }

  const firstGit = async()=>{
    const request = await Get.nodirRepo()

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
      <section className='repositories w-full'>

       <ul className=' ml-6'>
       {over.map((e)=>{
        return <li key={e.id} className=' py-6 max-w-[896px] w-full border-b-[1px] border-[#d0d7de] '>

        <a  className='  p-4 flex flex-col justify-between'>
          <div className="">
          <div className='flex justify-start'>
            <h3 className=' mr-4 text-[14px] leading-[1.5] text-[#0969da] font-[600]'>{e.name}</h3>
            <p className=' px-[7px] border-[1px] border-[#d0d7de] rounded-xl text-[14px] leading-[18px] text-[#57606a] font-[500]'>{e.visibility}</p>
          </div>

          <div className=" flex items-end">
            <p className=' mt-2 mr-4 text-[12px] text-[#57606a] leading-[1.5]'>{e.language}</p>
            <p className='text-[12px] text-[#57606a] leading-[1.5]'>{e.updated_at}</p>
          </div>
          </div>
         
        </a>
              
      </li>
       })}
       </ul>
        
      </section>
    </>
  );
};
export default Repositories;
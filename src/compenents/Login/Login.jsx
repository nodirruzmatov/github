import React, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import logosite from '../../assets/images/logosite.png'

const Login = ({setLog,auth,useAuth}) => {

  const {pathname} = useLocation()

  const [userName, setUserName] =useState('')
  const [password, setPassword] =useState('')

  const params = {
    userName: userName,
    password: password
  }

  setLog(pathname)

  return (
    <>
     <div className='flex flex-col justify-center items-center w-full'>
       <img className=' pt-8 pb-6 rounded-[50%]' src={logosite} width={48} height={48} alt="logo" />

        <h2 className=" mb-4 text-[24px] font-[300]">Sing in to GitHub</h2>

        <div className=' max-w-[308px] w-full mt-4 p-4 bg-[#f6f8fa]  rounded-[6px]'>

          <div className="">
            <p className=' mb-2 text-[14px]'>Username or email address</p>
            <input className=' max-w-[273px] w-full mt-1 mb-4 px-3 py-1 border-[1px] border-[#d8dee4] rounded-[6px] text-[14px] text-[#24292f] leading-6 outline-none'
            type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
          </div>

          <div className="">
            <p className=' mb-2 text-[14px]'>Password</p>
            <input
            className=' max-w-[273px] w-full mt-1 mb-4 px-3 py-1 border-[1px] border-[#d8dee4] rounded-[6px] text-[14px] text-[#24292f] leading-6 outline-none' 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button className=' w-full mt-4 py-1 px-4 rounded-[6px] bg-[#2da44e] text-white text-[14px] leading-5 font-medium' onClick={()=>useAuth(params)}>Sing in</button>
          
        </div>
        
        <p className=' max-w-[308px] w-full mt-4 mb-[10px] p-4 text-center border-[1px] border-[#d0d7de] rounded-[6px] text-[14px] text-[#24292f] leading-[1.5]'>New to GitHub? <span className='text-[#0969da] hover:underline '>Create an account.</span></p>
     </div>
      
    </>
  );
};

export default Login;
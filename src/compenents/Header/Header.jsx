import React, {useState} from 'react';
import logo from '../../assets/images/logo.jpg'
import Navbar from '../Navbar/Navbar';

const Header = ({search}) => {


  const [searchTxt, setSearchTxt] = useState("")

  return (
    <>

      <header className='header bg-[#24292f]'>
        <div className='container mx-auto flex items-center py-4'>

         <img className=' rounded-[50%] mr-4' src={logo} width={32} height={32} alt="logo site" />

         <input className=' max-w-[270px] w-full mr-4 px-4  border-[1px] border-[#57606a] rounded-md bg-[#24292f] text-slate-300 placeholder:text-slate-300 placeholder:text-[15px] outline-none' type="text" name="search" placeholder='Search or jump to…' 
         value={searchTxt} 
         onChange={(e)=>setSearchTxt(e.target.value)} />

         <button className=' mr-4 text-white' onClick={()=>search(searchTxt)}>Searcch</button>

         <Navbar />

        </div>
      </header>
      
    </>
  );
};

export default Header;
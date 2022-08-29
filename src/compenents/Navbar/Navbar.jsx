import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        
        <ul className='nav_list flex items-center'>
          <li className="navitem mr-4 text-white text-[14px] hover:text-slate-300 " >
            <a>Pull requests</a>
          </li>
          <li className="navitem mr-4 text-white text-[14px] hover:text-slate-300 " >
            <a>Issues</a>
          </li>
          <li className="navitem mr-4 text-white text-[14px] hover:text-slate-300 " >
            <a>Marketplace</a>
          </li>
          <li className="navitem mr-4 text-white text-[14px] hover:text-slate-300" >
            <a>Exlore</a>
          </li>
        </ul>

      </nav>
      
    </>
  );
};

export default Navbar;
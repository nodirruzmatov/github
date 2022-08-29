import React from 'react';
import Aside from '../Aside/Aside';
import { Outlet } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Overview from '../Overview/Overview';
import Followers from '../Followers/Followers';
import Following from '../Following/Following';

import Login from '../Login/Login';

const Main = ({setLog,auth,useAuth,log}) => {
  return (
    <>
      <main className="main container mx-auto flex justify-between">
      {(log ==="/login") ? "" : <Aside />}


        <Routes>
          
          <Route path="/login" element={<Login  setLog={setLog} auth={auth} useAuth={useAuth} />} />
          <Route path="/" element={<Overview />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          
        </Routes> 

      </main>
    </>

  );
};

export default Main;
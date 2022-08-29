import React from 'react';
import axios from 'axios';

const MAIN_API = 'https://api.github.com/users'
const USER_REPO= 'https://api.github.com/users/nodirruzmatov/repos'

const Get = {
  
  // ! indexApi ---
  indexApi: (params)=> axios.get(`${MAIN_API}/${params}`),
  userRepo: (params) => axios.get(`https://api.github.com/users/${params}/repos`) ,
  nodirRepo: ()=> axios.get('https://api.github.com/users/nodirruzmatov/repos'),
  nodir: ()=> axios.get('https://api.github.com/users/nodirruzmatov'),
  // }
}


export default Get

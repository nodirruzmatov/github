import React from 'react';
import axios from 'axios';

const MAIN_API = 'https://api.github.com/users'
const USER_REPO = 'https://api.github.com/users/nodirruzmatov/repos'
const FOLLOWERS ='https://api.github.com/users/mukhriddin-dev/followers'
const FOLLOWING ='https://api.github.com/users/mukhriddin-dev/following'


const Get = {
  
  // ! indexApi ---
  indexApi: (params)=> axios.get(`${MAIN_API}/${params}`),
  userRepo: (params) => axios.get(`https://api.github.com/users/${params}/repos`) ,
  followers: (params) => axios.get(`https://api.github.com/users/${params}/followers`),
  following: (params) => axios.get(`https://api.github.com/users/${params}/following`),
  // !---
  nodirFollowimg: ()=> axios.get('https://api.github.com/users/nodirruzmatov/following'),
  nodirFollowers: ()=> axios.get('https://api.github.com/users/nodirruzmatov/followers'),
  nodirRepo: ()=> axios.get('https://api.github.com/users/nodirruzmatov/repos'),
  nodir: ()=> axios.get('https://api.github.com/users/nodirruzmatov'),
  // }
}


export default Get

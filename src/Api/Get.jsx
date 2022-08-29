import React from 'react';
import axios from 'axios';

const MAIN_API = 'https://api.github.com/users'

const Get = {
  
  // ! indexApi ---
  indexApi: (params)=> axios.get(`${MAIN_API}/${params}`),
  nodir: ()=> axios.get('https://api.github.com/users/nodirruzmatov'),
  //   return request.data
  // }
}


export default Get

import { useState, useEffect,} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Get from './Api/Get'
import Header from './compenents/Header/Header'
import Footer from './compenents/Fotter/Footer'
import Main from './compenents/Main/Main'
import Login from './compenents/Login/Login'
import UserContext from './useContext/useContext'

function App() {

  const [aa, setAA] =useState()

  

  const [result, setResult] = useState([])
  const [loadind, setLoading] = useState(false)

  // ! login

  const back=useNavigate()


  const [log, setLog] = useState()
  const [auth, setAuth] = useState(false)
  const user ={
  
    userName: 'admin123',
    password: '123456'
  }

  const useAuth = (params)=>{
    (params.userName === user.userName && params.password === user.password) ?
    back("/") : back("/login") 
  }

  // ! APi
  const srcGit = async(str)=>{
    setLoading(false) 

    const response = await Get.indexApi(str)
    
    setResult(response.data)
    setLoading(true)
  }

  const firstGit = async()=>{
    setLoading(false)

    const request = await Get.nodir()

    setResult(request.data)
    setLoading(true)
  }

  useEffect(()=>{
    firstGit()
  },[])


  return <>

    <UserContext.Provider value={{result, aa}}>
      {(log ==="/login") ? "" : <Header search={srcGit} setAA={setAA}/>}
      
      <Main setLog={setLog} auth={auth} useAuth={useAuth} log={log}/>

      {(log ==="/login") ? "" : <Footer />}

    </UserContext.Provider>
  </>
}

export default App

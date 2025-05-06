
import { Routes , Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SignInPage from './pages/SignInPage'

import IntroPage from './pages/IntroPage'
import MainPage from './pages/Mainpage'

import LandingPage from './pages/LandingPage'
import { UploadPage } from './pages/UploadPage'

import { useEffect, useState } from 'react'




function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false);
    }
  },[isLoggedIn])
  

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}  />
      <Route path='/signup' element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/signin' element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/intro' element={<IntroPage/>} />
      <Route path='/landing' element={isLoggedIn ? <LandingPage isLoggedIn={isLoggedIn} setIsLogedIn={setIsLoggedIn} /> : <SignInPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/getInsights' element={isLoggedIn ? <UploadPage /> : <SignInPage setIsLoggedIn={setIsLoggedIn} />} />      
    </Routes>
  )
}

export default App

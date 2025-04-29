
import { Routes , Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SignInPage from './pages/SignInPage'
import Dashboard from './components/DashBoard'
import IntroPage from './pages/IntroPage'
import MainPage from './pages/Mainpage'
import Features from './pages/Features'
import LandingPage from './pages/LandingPage'
import { UploadPage } from './pages/UploadPage'
import { DashBoardPage } from './pages/DasboardPage'




function App() {
  

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}  />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/signin' element={<SignInPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/intro' element={<IntroPage/>} />
      <Route path='/features' element={<Features/>} />
      <Route path='/landing' element={<LandingPage/>} />
      <Route path='/uploadfile' element={<UploadPage/>} />
      <Route path='/getyourdashboard' element={<DashBoardPage/>} />
    </Routes>
  )
}

export default App

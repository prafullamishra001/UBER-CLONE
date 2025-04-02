import react, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import CaptainSignin from './pages/captain.signup'
import Captainlogin from './pages/captainlogin'
import UserSignin from './pages/usersignup'
import Userlogin from './pages/userlogin'
import { UserDataContext } from './context/usercontext'

const app=() => {

  const ans=useContext(UserDataContext)
  console.log(ans);
  
    return (
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Userlogin/>}/>
            <Route path='/signup' element={<UserSignin/>}/>
            <Route path='/captainlogin' element={<Captainlogin/>}/>
            <Route path='/captainsignin' element={<CaptainSignin/>}/>
          </Routes>

        </div>
    )
}
export default app
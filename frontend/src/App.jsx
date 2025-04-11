import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './pages/Start'
import CaptainSignin from './pages/captain.signup'
import Captainlogin from './pages/captainlogin'
import UserSignin from './pages/usersignup'
import Userlogin from './pages/userlogin'
import { UserDataContext } from './context/usercontext'
import Home from './pages/home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Userlogout from './pages/Userlogout'
import Captainhome from './pages/captainhome'
import CaptainProtectedWrapper from './pages/captainprotectedwrapper'

const app=() => {

  const ans=useContext(UserDataContext)
  console.log(ans);

    return (
        <div>
          <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/login' element={<Userlogin/>}/>
            <Route path='/signup' element={<UserSignin/>}/>
            <Route path='/captainlogin' element={<Captainlogin/>}/>
            <Route path='/captainsignin' element={<CaptainSignin/>}/>

            <Route path='/home' element={
              <UserProtectedWrapper>
                <Home/>
              </UserProtectedWrapper>
             } />

             <Route path='/user/logout' element={
              <UserProtectedWrapper>
              <Userlogout/>
             </UserProtectedWrapper>
             }/>

            <Route path='/captainhome' element={
              <CaptainProtectedWrapper>
                  <Captainhome/>
              </CaptainProtectedWrapper>
            }/>


          </Routes>

        </div>
    )
}
export default app
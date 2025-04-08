import React,{useContext,useEffect}from 'react'
import { UserDataContext } from '../context/usercontext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({
    children

}) => {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()

    useEffect(() => {
        if (!token) {
          navigate('/login');
        }
      }, [token]);  
    
      if (!token) return null;
 return (
  <>
  {children}
  </>
 )
};

export default UserProtectedWrapper
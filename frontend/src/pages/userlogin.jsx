import React,{useState,useContext}from 'react'
import {Link} from 'react-router-dom'
import {UserDataContext} from '../context/usercontext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const UserLogin = () => {
    const[email,setemail]=useState('') 
    const[password,setpassword]=useState('')   
    const[userdata,setuserdata]=useState({})

    const {user,setuser}=useContext(UserDataContext);
    const navigate=useNavigate()
    
    const submithandler=async (e)=>{
        e.preventDefault();
        const userData={
            email:email,
            password:password
        }
    
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)        
    if(response.status===200){
        const data=response.data
        setuser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
    }
        setemail('')
        setpassword('')
    
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form onSubmit={(e)=>{submithandler(e)}}>
                <h3 className='text-lg font-medium mb-2'>Enter your email </h3>
                <input 
                required 
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type="email"
                 placeholder='email@example.com'/>

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input 
                required 
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type="password" 
                placeholder='password'/>

                <button
                 className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
                >Login</button>
                <p className='text-center'>New here ?   <Link to='/signup' className='text-blue-600'>Create new account</Link></p>

            </form>
            </div>

            <div>
                <Link to='/captainlogin'
                 className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
                >Log in as captain</Link>
            </div>
        </div>
    )
}
export default UserLogin
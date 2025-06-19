import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from   'axios'
import { CaptainDataContext } from '../context/captaincontext'
import Captainhome from './captainhome'
const CaptainLogin = () => {    

     const[email,setemail]=useState('') 
        const[password,setpassword]=useState('')   
    
    const {captain,setCaptain}=React.useContext(CaptainDataContext)
    const navigate=useNavigate()

       
        
        const submithandler=async(e)=>{
            e.preventDefault();
           const captain= {
                email:email,
                password
            }
try{
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)

            if(response.status===200){
                const data=response.data

                setCaptain(data.captain)
                localStorage.setItem('token',data.token)    
                navigate('/captainhome')
            }
            
            setemail('');
            setpassword('');
        
        } catch (error) {
        alert("Invalid email or password. Please try again.");
    }
};


    return (
         <div className='p-7 h-screen flex flex-col justify-between'>
                    <div>
                       <div className="text-3xl ml-0 mb-4 font-bold text-black-100 tracking-wide" style={{ fontFamily: 'Montserrat' }}>
  WayGo
</div>
                    <form onSubmit={(e)=>{submithandler(e)}}>
                        
                        <h3 className='text-lg font-medium mb-2'>What is your email ?</h3>
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
                        <p className='text-center'>Join today <Link to='/captainsignin' className='text-blue-600'>Register as Captain</Link></p>
        
                    </form>
                    </div>
        
                    <div>
                        <Link to='/login'
                         className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
                        >Log in as User</Link>
                    </div>
                </div>
    )
}
export default CaptainLogin
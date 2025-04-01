import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const CaptainLogin = () => {    

     const[email,setemail]=useState('') 
        const[password,setpassword]=useState('')   
        const[captaindata,setcaptaindata]=useState({})
        
        const submithandler=(e)=>{
            e.preventDefault();
            setcaptaindata({
                email:email,
                password:password
            })
            
            setemail('')
            setpassword('')
        
        }


    return (
         <div className='p-7 h-screen flex flex-col justify-between'>
                    <div>
                    <img className='w-32 h-auto mb-10' src="https://i.pinimg.com/736x/9e/79/bd/9e79bd2ae97f71e39bc20126a50a0ceb.jpg" alt="" />
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
                        >login</button>
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
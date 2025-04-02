import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {

        const[email,setemail]=useState('')
            const[password,setpassword]=useState('')
            const[firstname,setfirstname]=useState('')
            const[lastname,setlastname]=useState('')
            const[userdata,setuserdata]=useState({})
    
            const submitHandler=(e)=>{
                e.preventDefault();
                setuserdata({
                    username:{
                        firstname:firstname,
                        lastname:lastname 
                    },
                    email:email,
                    password:password
                })
                console.log(userdata)
                setemail('')
                setpassword('')
                setfirstname('')
                setlastname('')
            }
    return (
        <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-32 h-auto mb-10' src="https://i.pinimg.com/736x/9e/79/bd/9e79bd2ae97f71e39bc20126a50a0ceb.jpg" alt="" />  
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className='text-base font-medium mb-2'>Enter your Name ?</h3>
                <div className='flex gap-4 mb-5 '>
                <input 
                required 
                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm' 
                type="text"
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
                placeholder='First Name'/>

                <input 
                required  
                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm' 
                type="text"
                value={lastname}
                onChange={(e)=>setlastname(e.target.value)}
                placeholder='Last Name'/>

                </div>

                <h3 className='text-base font-medium mb-2'>Enter your Email </h3>
                <input 
                required  
                className='bg-[#eeeeee]  w-1/2 rounded mb-5 px-4 py-2 border  text-base placeholder:text-sm' 
                type="text"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder='email@gmail.com'/>

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                <input 
                required 
            
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                type="password" 
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder='password'/>

                <button
                className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base' 
                >Signup</button>
                <p className='text-center'>Alredy have a account ?<Link to='/captainlogin' className='text-blue-600'>Login Here</Link></p>

            </form>
            </div>

            <div>
               <p className='text-[10px] leading-tight'>This side is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>
               and <span className='underline'>Terms of Service apply</span></p>
            </div>
        </div>
</div>
    )
}
export default CaptainSignup
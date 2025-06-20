import React from 'react'
import {Link} from 'react-router-dom'


const Start = () => {
    return (
        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <div className="text-3xl ml-8 font-bold text-black-100 tracking-wide" style={{ fontFamily: 'Montserrat' }}>
  WayGo
</div>
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-2xl ml-4 font-bold'>Get started with WayGo</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>

        </div>  
    )
}
export default Start
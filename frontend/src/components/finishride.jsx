import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FinishRide = (props) => {

    const navigate = useNavigate();

    async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/rides/end-ride`, {
   
        rideId: props.ride._id  


},  {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    if (response.status === 200) {
        navigate('/captain-home')
    }

}


    return (
    
        <div>
        <h5 className='p-1 text-center w-full absolute top-0' onClick={()=>{
                props.setfinishridepanel(false)
            }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>
             <h3 className='text-2xl font-semibold mb-5'>Finish this ride!</h3>
             <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="data:image/jpeg;base64,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" alt="" />
                      <h4 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.2 km</h5>
             </div>

             <div className='flex gap-2 justify-between flex-col items-center'>
             <div className=' w-full mt-5 '>

                <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className="ri-map-pin-user-line"></i>
                <div>
                   
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickUp}</p>
                </div>
                </div>

                <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className="text-lg ri-map-pin-2-line"></i>
                <div>
                   
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                </div>
                </div>

                <div className='flex items-center gap-5 p-3'>
                <i className="ri-money-rupee-circle-fill"></i>
                <div>
                    <h3 className='text-lg  font-medium'>₹{props.ride?.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Ride Cost</p>
                </div>
                </div>

             </div>
          
           <div className='mt-10 w-full'>

           <button
           onClick={endRide} 
         className=' w-full text-large flex justify-center  mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>

        

  
        </div>

    </div>
        </div>
    )
}

export default FinishRide
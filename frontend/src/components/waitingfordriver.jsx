import React from 'react'

const WaitingForDriver = (props) => {
    return(
        <div>
        <h5 className='p-1 text-center w-full absolute top-0' onClick={()=>{
             props.WaitingForDriver(false)
         }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>

         <div className='flex items-center justify-between'>
         <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
         <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
         </div>
         </div>

          <div className='flex gap-2 justify-between flex-col items-center'>
          <div className=' w-full mt-5 '>

             <div className='flex items-center gap-5 p-3 border-b-1'>
             <i className="ri-map-pin-user-line"></i>
             <div>
                 <h3 className='text-lg  font-medium'>562/11-A</h3>
                 <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
             </div>
             </div>

             <div className='flex items-center gap-5 p-3 border-b-1'>
             <i className="text-lg ri-map-pin-2-line"></i>
             <div>
                 <h3 className='text-lg  font-medium'>562/11-A</h3>
                 <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
             </div>
             </div>

             <div className='flex items-center gap-5 p-3'>
             <i className="ri-money-rupee-circle-fill"></i>
             <div>
                 <h3 className='text-lg  font-medium'>₹ 193.20</h3>
                 <p className='text-sm -mt-1 text-gray-600'>Ride Cost</p>
             </div>
             </div>

          </div>
          
          </div>


     </div>
    )

}

export default WaitingForDriver
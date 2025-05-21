import React from 'react'

const Vehiclepanel = (props) => {
    
return (
    <div>
        <h5 className='p-1 text-center w-full absolute top-0' onClick={()=>{
                props.setvehiclepanelopen(false)
            }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            
               <div onClick={()=>{
                props.setconfirmedridepanel(true)
               }} className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className=' w-1/2 ml-4 '>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
            </div> 
           

            <div onClick={()=>{
                props.setconfirmedridepanel(true)
               }} className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="" />
                <div className=' w-1/2 ml-2 '>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.motorcycle}</h2>
            </div> 

              <div onClick={()=>{
                props.setconfirmedridepanel(true)
               }} className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2 ml-8 '>
                    <h4 className='font-medium text-base'>Uber auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable auto rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
            </div>  
    </div>
)
}

export default Vehiclepanel

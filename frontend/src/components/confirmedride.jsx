import Recat from 'react'
const ConfirmedRide = () => { 
    return(
        <div>
           <h5 className='p-1 text-center w-full absolute top-0' onClick={()=>{
                props.setvehiclepanelopen(false)
            }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>
             <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>

             <div className='flex justify-between flex-col items-center'>
             <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
             <div className=' w-full '>
                <div>
                    
                </div>

             </div>
             <button className=' w-full ' >Confirm</button>
             </div>


        </div>
    )

}

export default ConfirmedRide
import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import FinishRide from '../components/finishride';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LiveTracking from './../components/LiveTracking';

const CaptainRiding = () => {

  const [finishridepanel,setfinishridepanel]=useState(false)
  const finishridepanelref=useRef(null)
  const location = useLocation();
  const rideData = location.state?.ride 

  useGSAP(function(){
                      if(finishridepanel){
                          gsap.to(finishridepanelref.current,{
                              transform:'translateY(0%)',
                          })
                      }else{
                          gsap.to(finishridepanelref.current,{
                              transform:'translateY(100%)',
                          })
                      }
                      }
                      ,[finishridepanel])




  return (
   <div className='h-screen relative flex flex-col justify-end'>
    
                <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                  
                    <Link to='/captainhome' className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className=" text-lg font-medium ri-logout-box-line"></i>
                    </Link>

                </div>
               

                <div className='h-1/5 p-6 flex items-center justify-between  relative bg-yellow-400'
                onClick={()=>{
                  setfinishridepanel(true)
                }}>
                <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={()=>{
               
              }}><i className="text-3xl text-black-200 ri-arrow-down-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>4 km away</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg' >Complete Ride</button>

                
                </div>
                <div ref={finishridepanelref} className='fixed w-full z-[500] bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
                                <FinishRide
                                ride={rideData}
                                 setfinishridepanel={setfinishridepanel}/>
                    </div>
 <div className='h-screen w-screen fixed top-0 z-[-1]'>
                <LiveTracking/>
                </div>
                 </div>

  )
}
export default CaptainRiding

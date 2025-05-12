import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import Captaindetails from '../components/Captaindetails'
import Ridepopup from './../components/ridepopup';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmedRide from './../components/confirmedride';
import ConfirmRidepopup from './../components/confirmridepopup';

const Captainhome=()=>{
    const[ridepopuppanel,setridepopuppanel]=useState(true)
    const[Confirmridepopuppanel,setConfirmridepopuppanel]=useState(false)

    const ridepopuppanelref=useRef(null)
    const confirmridepopuppanelref=useRef(null)
    
      useGSAP(function(){
                    if(ridepopuppanel){
                        gsap.to(ridepopuppanelref.current,{
                            transform:'translateY(0%)',
                        })
                    }else{
                        gsap.to(ridepopuppanelref.current,{
                            transform:'translateY(100%)',
                        })
                    }
                    }
                    ,[ridepopuppanel])

    useGSAP(function(){
           if(Confirmridepopuppanel){
                  gsap.to(confirmridepopuppanelref.current,{
                    transform:'translateY(0%)',
                        })
                       }else{
                 gsap.to(confirmridepopuppanelref.current,{
                transform:'translateY(100%)',
                        })
                        }
                    }
           ,[Confirmridepopuppanel])




    return(
        <div className='h-screen'>
                <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                    <img  className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    <Link to='/Home' className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className=" text-lg font-medium ri-logout-box-line"></i>
                    </Link>

                </div>
                <div className='h-3/5'>
                <img className='h-full w-full object-cover 'src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
                </div>

                <div className='h-2/5 p-6'>
                 <Captaindetails/>
                </div>
                     <div ref={ridepopuppanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
                                <Ridepopup setridepopuppanel={setridepopuppanel} setConfirmridepopuppanel={setConfirmridepopuppanel}/>
                    </div>

                     <div ref={confirmridepopuppanelref} className='fixed w-full h-screen z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
                                <ConfirmRidepopup setConfirmridepopuppanel={setConfirmridepopuppanel} setridepopuppanel={setridepopuppanel}/>
                     </div>
                                 
                 </div>

      
    
    )
    
}
export default Captainhome
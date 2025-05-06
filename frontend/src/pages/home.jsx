import React,{useRef, useState}from 'react'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './../components/locationsearchpanel';


const Home=() => { 
    const [pickUp,setPickUp]=useState('')
    const [destination,setdestination]=useState('')
    const [panelopen,setPanelOpen]=useState(false)
    const panelRef=useRef(null)
    const panelcloseRef=useRef(null)
    
    const submitHandler=(e)=>{
e.preventDefault();
    }

    useGSAP(function(){
     if(panelopen){
        gsap.to(panelRef.current,{
            height:'70%',
            padding:24

           
        })
        gsap.to(panelcloseRef.current,{
            opacity:1
        })
     }
     else{
        gsap.to(panelRef.current,{
            height:'0%',
            padding:24
        })
        gsap.to(panelcloseRef.current,{
            opacity:0
        })
     }

    },[panelopen])

    return(
        <div className='h-screen overflow-hidden'>
            <img className='w-16 absolute mt-5 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='h-screen w-screen'>
            <img className='h-full w-full object-cover 'src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full '> 
           <div className='h-[25%] p-6 bg-white relative '>
            <h5  ref={panelcloseRef}
            onClick={()=>{
                setPanelOpen(false)
            }}
            className='absolute opacity-0 right-6 top-6 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i> 
            </h5>
           <h4 className='text-2xl font-semibold'>Find a Trip</h4>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <div className="line absolute h-16 w-1 top-[54%] left-10 bg-gray-900 rounded-full"></div>
                <input 
                onClick={()=>{
                    setPanelOpen(true)
                }}
                value={pickUp}
                onChange={(e)=>{setPickUp(e.target.value)}}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                type="text" 
                placeholder='Add a pick-up location' 
                />
                <input 
                   onClick={()=>{
                    setPanelOpen(true)
                }}
                 value={destination}
                 onChange={(e)=>{setdestination(e.target.value)}}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'  type="text" placeholder='Enter your destination' />
            </form>
           </div>
           <div ref={panelRef} className='bg-white h-0'>
            <LocationSearchPanel/>
           </div>
        </div>
        <div className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 bg-white'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            
               <div className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className=' w-1/2 ml-4 '>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>  

            <div className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="" />
                <div className=' w-1/2 ml-2 '>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹65</h2>
            </div> 

              <div className='flex border-2 border-white active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2 ml-8 '>
                    <h4 className='font-medium text-base'>Uber auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 minutes away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable auto rides </p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.85</h2>
            </div>  

        </div>
        </div>
    )
}

export default Home
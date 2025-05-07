    import React,{useRef, useState}from 'react'
    import {useGSAP} from '@gsap/react'
    import {gsap} from 'gsap'
    import 'remixicon/fonts/remixicon.css'
    import LocationSearchPanel from './../components/locationsearchpanel';
    import ConfirmedRide from '../components/confirmedride';
    import Vehiclepanel from '../components/vehiclepanel';
import LookingForDriver from '../components/lookingfordriver';
  
   


    const Home=() => {
        const [pickUp,setPickUp]=useState('')
        const [destination,setdestination]=useState('')
        const [panelopen,setPanelOpen]=useState(false)
        const vehiclepanelref=useRef(null)
        const confirmedridepanelref=useRef(null)    
        const lookingforforDriverref=useRef(null)
        const panelRef=useRef(null)
        const panelcloseRef=useRef(null)
        const [vehiclepanelopen,setvehiclepanelopen]=useState(false)
        const [confirmedridepanel,setconfirmedridepanel]=useState(false)
        const [lookingfordriver,setlookingfordriver]=useState(false)
        
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

        useGSAP(function(){
    if(vehiclepanelopen){
        gsap.to(vehiclepanelref.current,{
            transform:'translateY(0%)',
        })
    }else{
        gsap.to(vehiclepanelref.current,{
            transform:'translateY(100%)',
        })
    }
    },[vehiclepanelopen])  


    useGSAP(function(){
        if(confirmedridepanel){
            gsap.to(confirmedridepanelref.current,{
                transform:'translateY(0%)',
            })
        }else{
            gsap.to(confirmedridepanelref.current,{
                transform:'translateY(100%)',
            })
        }
        },[confirmedridepanel]) 
        
        useGSAP(function(){
            if(lookingfordriver){
                gsap.to(lookingforforDriverref.current,{
                    transform:'translateY(0%)',
                })
            }else{
                gsap.to(lookingforforDriverref.current,{
                    transform:'translateY(100%)',
                })
            }
            },[lookingfordriver])  


        return(
            <div className='h-screen overflow-hidden'>
                <img className='w-16 absolute mt-5 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div onClick={()=>{
                setvehiclepanelopen(false)
            }} className='h-screen w-screen'>
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
                <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclepanelopen={setvehiclepanelopen}/>
            </div>
            </div>
            <div ref={vehiclepanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
            <Vehiclepanel setconfirmedridepanel={setconfirmedridepanel}   setvehiclepanelopen={setvehiclepanelopen}/>
            </div>
            <div ref={confirmedridepanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
            <ConfirmedRide setconfirmedridepanel={setconfirmedridepanel} setlookingfordriver={setlookingfordriver}/>
            </div>
            <div ref={lookingforforDriverref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
            <LookingForDriver setlookingfordriver={setlookingfordriver}/>
            </div>
            </div>
            
        )
    }

    export default Home
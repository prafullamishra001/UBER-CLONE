    import React,{useRef, useState,useEffect}from 'react'
    import {useGSAP} from '@gsap/react'
    import {gsap} from 'gsap'
    import 'remixicon/fonts/remixicon.css'
    import LocationSearchPanel from './../components/locationsearchpanel';
    import ConfirmedRide from '../components/confirmedride';
    import Vehiclepanel from '../components/vehiclepanel';
import LookingForDriver from '../components/lookingfordriver';
import WaitingForDriver from '../components/waitingfordriver';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/usercontext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

  

    const Home=() => {
        const [pickUp,setpickUp]=useState('')
        const [destination,setdestination]=useState('')
        const [panelopen,setPanelOpen]=useState(false)
        const vehiclepanelref=useRef(null)
        const confirmedridepanelref=useRef(null)    
        const lookingforDriverref=useRef(null)
        const waitingfordriverref=useRef(null)
        const panelRef=useRef(null)
        const panelcloseRef=useRef(null)
        const [vehiclepanelopen,setvehiclepanelopen]=useState(false)
        const [confirmedridepanel,setconfirmedridepanel]=useState(false)
        const [lookingfordriver,setlookingfordriver]=useState(false)
        const [waitingfordriver,setwaitingfordriver]=useState(false)
        const [ pickUpSuggestions, setpickUpSuggestions ] = useState([])
        const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
        const [ activeField, setActiveField ] = useState(null)
        const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)


        const navigate = useNavigate()

        const { socket } = useContext(SocketContext)
        const { user } = useContext(UserDataContext)
    
        useEffect(() => {
            if (socket && user && user._id) {
            socket.emit("join", { userType: "user", userId: user._id })
            }
        }, [user])
    
        socket.on('ride-confirmed', ride => {
    
    
            setlookingfordriver(false)
            setwaitingfordriver(true)
            setRide(ride)
        })

        
    
        socket.on('ride-started', ride => {
            console.log("ride")
            setwaitingfordriver(false)
            navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
        })

        const handlepickUpChange = async (e) => {
            setpickUp(e.target.value)
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                    params: { input: e.target.value },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
    
                })
                setpickUpSuggestions(response.data)
            } catch {
                // handle error
            }
        }
    
        const handleDestinationChange = async (e) => {
            setdestination(e.target.value)
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                    params: { input: e.target.value },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setDestinationSuggestions(response.data)
            } catch {
                // handle error
            }
        }   

        
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
                gsap.to(lookingforDriverref.current,{
                    transform:'translateY(0%)',
                })
            }else{
                gsap.to(lookingforDriverref.current,{
                    transform:'translateY(100%)',
                })
            }
            },[lookingfordriver])   

            useGSAP(function(){
                if(waitingfordriver){
                    gsap.to(waitingfordriverref.current,{
                        transform:'translateY(0%)',
                    })
                }else{
                    gsap.to(waitingfordriverref.current,{
                        transform:'translateY(100%)',
                    })
                }
                }
                ,[waitingfordriver])



                async function findTrip() {
                    setvehiclepanelopen(true)
                    setPanelOpen(false)
            
                    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
                        params: { pickUp, destination },
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
            
            
                    setFare(response.data)
            
            
                }

                async function createRide() {
                    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
                        pickUp,
                        destination,
                        vehicleType
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
            
            
                }

              


        return(
            <div className='h-screen overflow-hidden'>

                <div className='h-screen w-screen'>
               
                <LiveTracking />
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
                    <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>
                    <input 
                    onClick={()=>{
                        setPanelOpen(true)
                        setActiveField('pickUp')
                    }}
                    value={pickUp} 
                    onChange={handlepickUpChange}
                    className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                    type="text"
                    placeholder='Add a pick-up location'
                    />
                    <input 
                    onClick={()=>{
                        setPanelOpen(true)
                        setActiveField('destination')
                    }}
                    value={destination}
                    onChange={handleDestinationChange}
                    className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                    type="text"
                    placeholder='Enter your destination' />
                </form>
                <button
                        onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                    </button>
            </div>
            
            <div ref={panelRef} className='bg-white h-0'>
                <LocationSearchPanel suggestions={activeField === 'pickUp' ? pickUpSuggestions : destinationSuggestions} setPanelOpen={setPanelOpen} setvehiclepanelopen={setvehiclepanelopen} 
                 setpickUp={setpickUp}
                 setdestination={setdestination}
                 activeField={activeField}/>
            </div>
            </div>

            <div ref={vehiclepanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
            <Vehiclepanel  setVehicleType={setVehicleType}
                    fare={fare} setconfirmedridepanel={setconfirmedridepanel}   setvehiclepanelopen={setvehiclepanelopen}/>
            </div>

            <div ref={confirmedridepanelref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
            <ConfirmedRide  createRide={createRide}
            setVehicleType={setVehicleType}
                    pickUp={pickUp}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType} 
    
                    setconfirmedridepanel={setconfirmedridepanel} setvehiclepanelopen={setvehiclepanelopen} setlookingfordriver={setlookingfordriver}/>
            </div>

            <div ref={lookingforDriverref} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
            <LookingForDriver   createRide={createRide}
            setVehicleType={setVehicleType}
                    pickUp={pickUp}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType} setlookingfordriver={setlookingfordriver}/>
            </div>

            <div ref={waitingfordriverref} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
            <WaitingForDriver     ride={ride}
                    setlookingfordriver={setlookingfordriver}
                    setwaitingfordriver={setwaitingfordriver}
                     waitingfordriver={waitingfordriver}/>
            </div>

            </div>
            
        )
    }

    export default Home

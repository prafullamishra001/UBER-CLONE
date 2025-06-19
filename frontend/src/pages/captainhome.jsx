import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import Captaindetails from '../components/Captaindetails'
import Ridepopup from './../components/ridepopup';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmedRide from './../components/confirmedride';
import ConfirmRidepopup from './../components/confirmridepopup';
import {useEffect,useContext} from 'react';
import { SocketContext } from '../context/SocketContext';
import {CaptainDataContext} from '../context/captaincontext';
import axios from 'axios';


const Captainhome=()=>{
    const[ridepopuppanel,setridepopuppanel]=useState(false)
    const[Confirmridepopuppanel,setConfirmridepopuppanel]=useState(false)

    const ridepopuppanelref=useRef(null)
    const confirmridepopuppanelref=useRef(null)

    const [ride, setRide] = useState(null);

    const {socket}=useContext(SocketContext)
    const {captain}=useContext(CaptainDataContext)

   useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()


    }, [])

     socket.on('new-ride', (data) => {
         
          setRide(data)
          setridepopuppanel(true)
    })



    async function confirmRide() {
    
        const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
            rideId:ride._id,
            captainId:captain._id,

        },{
                 headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    setridepopuppanel(false)
    setConfirmridepopuppanel(true)
}




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
   <div className="text-3xl ml-0 mb-4 font-bold text-black-100 tracking-wide" style={{ fontFamily: 'Montserrat' }}>
  WayGo
</div>
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
                                <Ridepopup 
                                ride={ride}
                                setridepopuppanel={setridepopuppanel} 
                                setConfirmridepopuppanel={setConfirmridepopuppanel}
                                confirmRide={confirmRide}/>
                    </div>

                     <div ref={confirmridepopuppanelref} className='fixed w-full h-screen z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
                                <ConfirmRidepopup 
                                ride={ride}
                                setConfirmridepopuppanel={setConfirmridepopuppanel} 
                                setridepopuppanel={setridepopuppanel}/>
                     </div>
                                 
                 </div>

      
    
    )
    
}
export default Captainhome
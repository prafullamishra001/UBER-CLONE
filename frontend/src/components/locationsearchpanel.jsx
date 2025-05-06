import React from 'react'

const LocationSearchPanel = () => {
// sample array for the location
  const locations=[
    "B-179 Rama green city, khamtarai road, bilaspur C.G",
    "C-173 Natures valley, kargi road, bilaspur C.G",
    "D-179 Dream city, nutan road, bilaspur C.G",
    "E-179 Green city, khamtarai road, bilaspur C.G",]




return(
    <div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
      <h4 className='font-medium'>
        B-179,Rama green city, khamtarai road, bilaspur C.G</h4>  
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
      <h4 className='font-medium'>
        B-179,Rama green city, khamtarai road, bilaspur C.G</h4>  
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
      <h4 className='font-medium'>
        B-179,Rama green city, khamtarai road, bilaspur C.G</h4>  
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
      <h4 className='font-medium'>
        B-179,Rama green city, khamtarai road, bilaspur C.G</h4>  
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
      <h4 className='font-medium'>
        B-179,Rama green city, khamtarai road, bilaspur C.G</h4>  
    </div>

  </div>  
)
}

export default LocationSearchPanel
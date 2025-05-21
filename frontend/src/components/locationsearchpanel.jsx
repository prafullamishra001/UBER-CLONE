import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickUp, setdestination, activeField }) => {


  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickUp(suggestion)
    } else if (activeField === 'destination') {
        setdestination(suggestion)
    }

}


return(
    <div>
      {
        suggestions.map((elem,idx)=>(
          <div key={idx} onClick={()=>
            handleSuggestionClick(elem)
          }
          className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start pt-10 my-2'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center  w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>
          {elem}</h4>  
      </div>
        ))
      }
  </div>  
)
}

export default LocationSearchPanel
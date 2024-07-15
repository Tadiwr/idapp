import React from 'react'
import CheckBox from './check_box'

type Props = {
    officeFlag: boolean,
    detailsFlag : boolean,
    confirmFlag : boolean
}

export default function BookingSideBar({officeFlag, detailsFlag, confirmFlag} : Props) {
  return (
    <div className='flex p-10 border flex-col rounded-xl w-full h-full' > 
        <h1 className='font-bold text-4xl mb-10' >Progress</h1>

        <div className='flex flex-row my-2' >
            <CheckBox check={officeFlag} />
            <p className='font-medium text-lg' >Select Office</p>
        </div>

        <div className='flex flex-row my-2' >
            <CheckBox check={detailsFlag} />
            <h1 className='font-medium text-lg' >Enter Details</h1>
        </div>

        <div className='flex flex-row my-2' >
            <CheckBox check={confirmFlag} />
            <h1 className='font-medium text-lg' >Confirm Booking</h1>
        </div>

        
        
    
    </div>
  )
}

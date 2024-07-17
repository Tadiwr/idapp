import React from 'react'
import CheckBox from './check_box'

type Props = {
    officeFlag: boolean,
    detailsFlag : boolean,
    confirmFlag : boolean
}

export default function BookingSideBar({officeFlag, detailsFlag, confirmFlag} : Props) {
  return (
    <div className='flex p-10 border-r flex-col w-full h-full' >
        <h1 className='font-bold text-4xl mb-10' >ID Book App</h1>

        <a href='/book' className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={officeFlag} />
            <p className='font-medium text-lg' >Select Office</p>
        </a>

        <a href='/book/enter_info' className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={detailsFlag} />
            <h1 className='font-medium text-lg' >Enter Details</h1>
        </a>

        <a className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={confirmFlag} />
            <h1 className='font-medium text-lg' >Confirm Booking</h1>
        </a>

        
        
    
    </div>
  )
}

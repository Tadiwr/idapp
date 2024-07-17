"use client";

import React from 'react'
import CheckBox from './check_box'
import { usePathname } from 'next/navigation';

type Props = {
    officeFlag: boolean,
    detailsFlag : boolean,
    confirmFlag : boolean
}

export default function BookingSideBar({officeFlag, detailsFlag, confirmFlag} : Props) {


    const pathName = usePathname();

    const shouldCheck = (tabName : "details" | "select_office" | "confirm") => {
        if (pathName == "/book") {
            if (tabName == "select_office") {
                return true
            }
        }

        if (pathName.startsWith("/book/enter_info")) {
            if (tabName == "details" || tabName == "select_office") {
                return true
            }
        }

        return false
    }

  return (
    <div className='flex p-10 border-r flex-col w-full h-full' >
        <h1 className='font-bold text-4xl mb-10' >ID Book App</h1>

        <a href='/book' className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={shouldCheck("select_office")} />
            <p className='font-medium text-lg' >Select Office</p>
        </a>

        <a className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={shouldCheck("details")} />
            <h1 className='font-medium text-lg' >Enter Details</h1>
        </a>

        <a className='flex flex-row my-2 justify-start items-center' >
            <CheckBox check={shouldCheck("confirm")} />
            <h1 className='font-medium text-lg' >Confirm Booking</h1>
        </a>

        
        
    
    </div>
  )
}

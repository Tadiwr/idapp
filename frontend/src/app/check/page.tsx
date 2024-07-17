"use client";

import checkBooking, { CheckBookingState } from '@/actions/check_booking.action';
import BookingCard from '@/components/booking_card';
import FormButton from '@/components/form_button';
import React from 'react'
import { useFormState } from 'react-dom';

export default function Check() {

    const initState : CheckBookingState = {booking: undefined, searchFailed: false};
    const [state, formAction] = useFormState(checkBooking, initState);

    return (
        <div className='w-full h-full flex flex-col justify-start p-10 items-center' >

            <div  className='w-3/4 grid grid-cols-1 gap-5 ' >

                <h1 className='text-center font-bold text-5xl' >Check Booking</h1>

                <form action={formAction} className='flex flex-col  justify-center items-center w-full' >
                    <input type="text" name='booking_code' required className='w-3/4 mr-3'  placeholder='Enter booking code...' />
                    <FormButton className='bg-purple-700 w-1/4 text-white border-none '>Check</FormButton>
                </form>
            </div>

            {/* Result Panel */}
            <div className='w-full p-5 flex flex-col justify-center items-center' >
                {state.booking ? <BookingCard className='w-3/4' booking={state.booking} /> : <PageInfo/>}
            </div>

        </div>
    )
}


function PageInfo() {
    return <div className='text-slate-400 w-1/2 text-center mt-10 font-medium text-2xl p-10 ' >
        <p>Enter the booking code you recieved when you first made a booking e.g HRE-18012024-4</p>
    </div>
}
"use client";

import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
    children: React.ReactNode
}

export default function FormButton({children} : Props) {

    const {pending} = useFormStatus();

    return (

        <button type='submit'  className='hover:bg-black transition-all' aria-disabled={pending} disabled={pending} >{pending ? "Please Wait..." : "Submit Booking"}</button>
    )
}

"use client";

import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
    children: React.ReactNode,
    className? : string
}

export default function FormButton({children, className = ""} : Props) {

    const {pending} = useFormStatus();

    return (
        <button type='submit'  className={`bg-purple-700 hover:bg-purple-900 transition-all translate-y-6 duration-100 ${className} `} aria-disabled={pending} disabled={pending} >{pending ? "Please Wait..." : children}</button>
    )
}

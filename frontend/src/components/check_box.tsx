import React from 'react'

type Props = {
    check : boolean
}

export default function CheckBox({check}: Props) {
  return (
    <div className='rounded-full flex p-1 mx-2 justify-center items-center h-6 w-6 border-2' >
        {check ? <CheckedState/> : ""}
    </div>
  )
}

function CheckedState() {
    return <div className='w-full h-full bg-slate-200 rounded-full' ></div>
}
import React from 'react'

type Props = {
    check : boolean
}

export default function CheckBox({check}: Props) {
  return (
    <div className='mx-2 h-10 w-2 border-1' >
        {check ? <CheckedState/> : <UncheckedState/>}
    </div>
  )
}

function CheckedState() {
    return <div className='w-full h-full bg-blue-500' ></div>
}

function UncheckedState() {
  return <div className='w-full h-full bg-slate-200' ></div>
}
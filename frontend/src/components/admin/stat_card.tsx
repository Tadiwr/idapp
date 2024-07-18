import React from 'react'

type Props = {
    title : string,
    value: number
}

export default function StatCard({title, value} : Props) {
  return (
    <div className='border rounded-2xl p-5 flex flex-col items-center justify-center ' >
        <p className='font-medium text-3xl' >{title}</p>
        <h1 className='font-bold text-9xl text-slate-400 ' >{value}</h1>
    </div>
  )
}

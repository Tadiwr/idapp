import React from 'react'

export default function FetchingOffices() {

    const offices = [0, 1, 2, 3, 4, 5]
    
    return (
        <div>
            {offices.map((office, index) => {
                return <div className='flex flex-col p-5 border rounded-2xl bg-slate-200 animate-pulse' key={index} ></div>
            })}
        </div>
    )
}

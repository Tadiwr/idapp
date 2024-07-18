import React from 'react'
import SideBarItem from './sidebar_item'

export type TSidebarItem = {
    title: string,
    href : string
}

export default function AdminSidebar() {


    const sidebarItems : TSidebarItem[] = [
        {
            title: "Home",
            href : "/admin"    
        }, 
        {
            title: "Bookings",
            href : "/admin/bookings"    
        }, 

        {
            title: "Offices",
            href: "/admin/offices"
        },

        {
            title: "Today's Bookings",
            href : "/admin/bookings/today"
        }
    ]

  return (
    <div className='border-r w-full p-5 h-screen ' >
        <h1 className='font-bold text-3xl' >Admin Dashboard</h1>
        
        <div className='mt-20 flex flex-col text-xl  font-medium items-start' >
            {sidebarItems.map((item, index) => {
                return <SideBarItem key={index} title={item.title} href={item.href} /> 
            })}
        </div>
    </div>
  )
}


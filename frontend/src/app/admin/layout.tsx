import AdminSidebar from '@/components/admin/admin_sidebar'
import React, { ReactNode } from 'react'

type Prop = {
    children: ReactNode
}

export default function Layout({children} : Prop) {
  return (
    <div className='flex flex-col w-full h-screen' >

      <div className='top-20 left-0 fixed w-64' >
        <AdminSidebar />
      </div>

      <div className='ml-64 p-5 ' >
        {children}
      </div>
    </div>
  )
}

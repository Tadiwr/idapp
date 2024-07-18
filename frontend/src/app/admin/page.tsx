import StatCard from '@/components/admin/stat_card';
import { getSummaryStats } from '@/data/summary_stats.data';
import React from 'react'

export default async function AdminApp() {

  const stats = await getSummaryStats();

  return (
    <div className='p-10' >
      <h1 className='text-5xl font-bold py-10  ' >Summary Statistics</h1>

      <div className='grid-cols-1 grid gap-10 md:grid-cols-2' >
          <StatCard title="Bookings" value={stats.bookingCount} />
          <StatCard title="Offices" value={stats.bookingCount} />
      </div>
    </div>
  )
}

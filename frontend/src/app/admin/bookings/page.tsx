import { getAllBookings } from '@/data/bookings.data';
import React from 'react'

export default async function AdminBookings() {

    const bookings = await getAllBookings();

    return (
        <div className='p-10' >
            <h1 className='text-5xl font-bold' >Bookings</h1>

            <table className='mt-10' >
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Booking Date</td>
                        <td>Phone Number</td>
                        <td>Office</td>
                    </tr>
                </thead>

                <tbody>
                    {bookings.map((booking, index) => {
                        return <tr>
                            <td>{booking.code}</td>
                            <td>{booking.firstName}</td>
                            <td>{booking.lastName}</td>
                            <td>{booking.date.toString()}</td>
                            <td>{booking.phoneNumber}</td>
                            <td>{booking.office.officeName}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

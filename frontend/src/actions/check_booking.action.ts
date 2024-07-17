"use server";

import { getBookingInfo } from "@/data/bookings.data";
import { Booking } from "@/data/types"

export type CheckBookingState = {
    booking? : Booking,
    searchFailed: boolean
}

export default async function checkBooking(prevState : CheckBookingState, formData: FormData) {

    const bookingCode = extractBookingCode(formData);

    console.log(bookingCode)

    const res = await getBookingInfo(bookingCode);

    return {
        booking: res.booking,
        searchFailed: !res.isValid
    }

}

function extractBookingCode(formData: FormData) {
    return formData.get("booking_code")?.toString() ?? "";
}
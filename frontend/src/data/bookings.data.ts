"use server";

import { Booking, GetBookingInfoResult, MakeBookingDTO } from "./types";
import { getBookingsApiBaseUrl } from "./utils";

/** takes a `booking` object of type `MakeBookingDTO` as a parameter and attempts to make
 * the booking. 
 * 
 * @returns The `Booking` object of the newly created booking
  */
export async function makeBooking(booking : MakeBookingDTO) : Promise<Booking> {
    const baseUrl = getBookingsApiBaseUrl();
    const reqUrl = `${baseUrl}/make`;

    const res = await fetch(reqUrl, {
        body: JSON.stringify(booking),
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
    });

    return await res.json() as Booking;
}

/** Takes in a `bookingCode` as a parameter and attempts to get the booking info correspinding
 * to that booking code.
 * 
 * @returns a  `GetBookingInfoResult` object
 * 
 * The GetBookingInfoResult object has a `isValid` property which flags if the booking code
 * is a real booking code and exists in the database
 * 
 */
export async function getBookingInfo(bookingCode: string) : Promise<GetBookingInfoResult> {
    const baseUrl = getBookingsApiBaseUrl();
    const reqUrl = `${baseUrl}/verify`;

    const res = await fetch(reqUrl, {
        body: JSON.stringify({bookingCode: bookingCode}),
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
    });

    return await res.json() as GetBookingInfoResult;
}

export async function getAllBookings() {
    const baseUrl = getBookingsApiBaseUrl();
    const reqUrl = `${baseUrl}/all`;

    const res = await fetch(reqUrl);

    return await res.json() as Booking[];

}
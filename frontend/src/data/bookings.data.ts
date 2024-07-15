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
        body: JSON.stringify(booking)
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
        body: JSON.stringify({bookingCode: bookingCode})
    });

    return await res.json() as GetBookingInfoResult;
}
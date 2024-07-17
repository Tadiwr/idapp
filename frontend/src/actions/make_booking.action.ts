"use server";

import { makeBooking } from "@/data/bookings.data";
import { MakeBookingDTO } from "@/data/types";
import { redirect } from "next/navigation";

export default async function makeBookingAction(prevState : {message: string}, formData : FormData) {

    // Extract details from form data
    const details : MakeBookingDTO = extractDetails(formData);
    let bookingCode : string = "";
    // api call to server

    try {
        const res = await makeBooking(details);
        bookingCode = res.code;
    } catch (error) {
        console.log(error)
        return {message : "Try Again"}
    }

    redirect(`/book/confirm/${bookingCode}`)

}

function extractDetails(formData : FormData) : MakeBookingDTO {

    const officeId : number = Number.parseInt(formData.get("office_id")?.toString() ?? "-1")

    return {
        officeId : officeId,
        firstName : formData.get("first_name")?.toString() ?? "",
        lastName : formData.get("last_name")?.toString() ?? "",
        phoneNumber : formData.get("phone_number")?.toString() ?? "",
    }
}
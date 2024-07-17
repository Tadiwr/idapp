export type Office = {
    officeName: string,
    shortName: string,
    capacity: number,
    id: number
}

export type MakeBookingDTO = {
    officeId : number,
    firstName : string,
    lastName : string,
    phoneNumber : string
}

export type Booking = MakeBookingDTO & {
    date: Date,
    idRegistered: boolean,
    office: Office
    id: number,
    code: string
}

export type GetBookingInfoResult = {
    booking: Booking
    isValid: boolean
  }
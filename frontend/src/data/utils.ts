export function getIpAddress() : string {
    return process.env.SERVER_ADDRESS ?? "";
}

const serverAddress = getIpAddress();
const baseUrl = `${serverAddress}/api/offices`

/** Return the api base url for the offices feature
 * Its in the format
 * 
 * `<server-address>/api/offices`
 * 
 */
export function getOfficesApiBaseUrl() : string {
    const serverAddress = getIpAddress();
    const baseUrl = `${serverAddress}/api/offices`;

    return baseUrl;
}

/** Return the api base url for the bookings feature
 * Its in the format
 * 
 * `<server-address>/api/bookings`
 * 
 */
export function getBookingsApiBaseUrl() : string {
    const serverAddress = getIpAddress();
    const baseUrl = `${serverAddress}/api/bookings`;

    return baseUrl;
}
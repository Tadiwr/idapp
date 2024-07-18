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

/** Return the api base url for the stats feature
 * Its in the format
 * 
 * `<server-address>/api/stats`
 * 
 */
export function getStatsApiBaseUrl() : string {
    const serverAddress = getIpAddress();
    const baseUrl = `${serverAddress}/api/stats`;

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

/** Takes a `Date` object as a parameter and returns it as a string in the form
 * 
 * `day day-number month year`
 */

export function formatDate(olddate: Date) {
    const date = new Date(olddate.toString());

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayIndex = date.getDay();
    const dayStr = daysOfWeek[dayIndex];

    const dayOfMonth = date.getDate();

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const monthIndex = date.getMonth()
    const monthStr = months[monthIndex]

    const year = date.getFullYear();

    return `${dayStr} ${dayOfMonth} ${monthStr} ${year}`;
}
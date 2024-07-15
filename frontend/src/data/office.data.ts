import { Office } from "./types";
import { getIpAddress as getServerAddress } from "./utils";

const serverAddress = getServerAddress();
const baseUrl = `${serverAddress}/api/offices`

export async function getOffices() : Promise<Office[]> {
    const reqUrl = `${baseUrl}/all`;

    const res = await fetch(reqUrl);

    return await res.json() as Office[];
}
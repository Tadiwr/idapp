import { Office } from "./types";
import { getOfficesApiBaseUrl} from "./utils";


export async function getOffices() : Promise<Office[]>  {

    try {    
        const baseUrl = getOfficesApiBaseUrl()
        const reqUrl = `${baseUrl}/all`;
        const res = await fetch(reqUrl);

        return await res.json() as Office[];
    } catch (e){
        console.log(e)
        return [];
    }
}
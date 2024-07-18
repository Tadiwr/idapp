"use server";

import { SummaryStats } from "./types";
import { getStatsApiBaseUrl } from "./utils";

/** Returns summary statisitics about bookings and offices */

export async function getSummaryStats () {
    const baseUrl = getStatsApiBaseUrl();
    const reqUrl = `${baseUrl}/summary`;

    const res = await fetch(reqUrl);

    return await res.json() as SummaryStats;
}
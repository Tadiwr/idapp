

export function getIpAddress() : string {
    return process.env.SERVER_ADDRESS ?? "";
} 
import { headers } from 'next/headers'
import Guest from '../../../models/Guest'
import dbConnect from '../../../lib/db'

export async function POST(request) {
    const data = await request.json()

    const { ip } = data

    const response = await fetch(`https://ipapi.co/${ip}/json`);
    const loc = await response.json();

    await dbConnect()

    await Guest.create({
        ip: ip || "N/A",
        city: loc.city || "N/A",
        country: loc.country || "N/A",
        latitude: loc.latitude || "N/A",
        longitude: loc.longitude || "N/A",
    })

    return Response.json({
        ip: ip || "N/A",
        city: loc.city || "N/A",
        country: loc.country || "N/A",
        latitude: loc.latitude || "N/A",
        longitude: loc.longitude || "N/A",
    })
}
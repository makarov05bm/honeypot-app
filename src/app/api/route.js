import { headers } from 'next/headers'
import Guest from '../../../models/Guest'
import dbConnect from '../../../lib/db'
import { userAgent } from 'next/server'

export async function GET(request) {
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for')

    console.log(userAgent(request))

    const response = await fetch(`https://ipapi.co/105.100.85.109/json`);
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
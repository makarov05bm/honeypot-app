import mongoose from "mongoose"

const GuestSchema = new mongoose.Schema({
    ip: String,
    userAgent: String,
    city: String,
    county: String,
    latitude: String,
    longitude: String,
}, {timestamps: true})

export default mongoose.models.Guest || mongoose.model('Guest', GuestSchema)
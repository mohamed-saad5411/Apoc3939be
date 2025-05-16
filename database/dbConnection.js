import mongoose from "mongoose";




export const dbConnection = () => { mongoose.connect(process.env.LOCAL_HOST) }
// export const dbConnection = () => { mongoose.connect(process.env.LIVE_HOST) }



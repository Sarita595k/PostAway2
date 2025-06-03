import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connetToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Db connected successfully")
    } catch (err) {
        console.log("error in connecting db", err)
    }
}

export default connetToDb
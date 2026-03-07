import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{
      console.log('Database Connected')
    })
  } catch (error) {
    console.log(`DataBase Error ${error}`)
  }
}

export default connectDb
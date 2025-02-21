import mongoose from "mongoose"

 const connectToDB=async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/Usersdata')
       console.log('connected to db.......')

    }catch(err){
        console.log('error connecting db',err)
    }
}

export default connectToDB
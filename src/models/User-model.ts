import mongoose from "mongoose";

//user types for apis
type UserType= {
    sName:String,
    sEmail:String,
    sAge:Number,
    sPassword:String
}

const userSchema = new mongoose.Schema<UserType>({
    sName: { type: String, required: true },
    sEmail: { type: String, required: true },
    sAge: { type: Number, required: true},
    sPassword:{type:String,required:true}
});



const User = mongoose.model('User', userSchema); 

// creating an age index in the suer schema in ascending order
const setIndex=async()=>{

   await User.collection.createIndex({sAge:1})
   console.log('index created.....')
}


setIndex()



export default User;

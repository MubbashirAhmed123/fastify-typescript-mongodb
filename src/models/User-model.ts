import mongoose from "mongoose";

type UserType= {
    sid:String,
    sName:String,
    sEmail:String,
    sAge:String
}

const userSchema = new mongoose.Schema<UserType>({
    sid: { type: String, unique: true },
    sName: { type: String, required: true },
    sEmail: { type: String, required: true },
    sAge: { type: Number, required: true},
});



const User = mongoose.model('User', userSchema); 

const setIndex=async()=>{
   await User.collection.createIndex({sAge:1})
   await User.collection.createIndex({sAge:1,sName:1})
   console.log('index created.....')
}


setIndex()



export default User;

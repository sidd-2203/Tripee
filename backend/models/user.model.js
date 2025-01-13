import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema=new mongoose.Schema({
        fullname:{
            firstname:{
                type:String,
                require:true,
                minlength:[3,'First name must be 3 characters or long'],
            },
            lastname:{
                type:String,
                require:false,
                minlength:[3,'First name must be 3 characters or long'],
            }
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        password:{
            type:String,
            require:true,
            select:false, // by default this property wont go back
        },
        socketId:{
            type:String,
        },
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword= async function (password) {
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function (password) {
    return await bcrypt.hash(password,10);
}
export const userModel=mongoose.model('user',userSchema);
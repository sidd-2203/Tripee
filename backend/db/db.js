import mongoose from "mongoose";

export function connectToDB(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{useNewUrlParser:true,
        console.log("Connected to DB");
}).catch(err=>console.log(err));
}
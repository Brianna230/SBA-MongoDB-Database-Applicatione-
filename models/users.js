import mongoose from "mongoose";

const userSchmema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    skinType:{
        type:String,
        require:true,
    },
    skinConcerns:{
        type:[String],
        require:true

    },
    allergies:{
        type:[String],
        require:true
    },
    CreateAt:{
        type:Date,
        default: Date.now()
    }
})

export default mongoose.model('users', userSchmema,'user')
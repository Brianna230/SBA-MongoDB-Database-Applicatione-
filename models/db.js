import mongoose from "mongoose";

const skinSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required: true,
        unique: true,
    },
    BrandName:{
        type:String,
        required:true,
        unique:true,
    },
    TypeofSkincare:{
        type:String
    },
    PrimaryIngredients:{
       type:[String],
    },
    CreateAt:{
        type:Date,
        default: Date.now()
    }
})

export default mongoose.model('db', skinSchema,'dbs')
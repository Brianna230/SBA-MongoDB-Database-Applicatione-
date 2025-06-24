import mongoose, { Schema } from "mongoose";

const ingredientsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true

    },
   benefit:{
    type:[String],
    ProductRef:{type:Schema.Types.ObjectId, ref:'db'} // reference the db model/schema
   },
   sensitiveSkin:{
    type:Boolean,
    default: false
   },
   CreateAt:{
     type:Date,
     default: Date.now()

   }

})

export default mongoose.model('ingredients', ingredientsSchema,'ingredient')
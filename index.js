import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import db from './models/db.js'
import ingredients from './models/ingredients.js'

const app = express()
app.use(express.json());

await mongoose.connect(process.env.MONGO_URL)
console.log("MongoDB connected")

const Port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/ProductName', async(req,res)=>{
    const ProductName = await db.find({})
    console.log(ProductName)
    res.json(ProductName)
})

app.post('/ProductName', async(req,res)=>{
   console.log(req.body)
   const ProductNameInfo = new db({
    ProductName:req.body.ProductName,
    BrandName:req.body.BrandName,
    TypeofSkincare:req.body.TypeofSkincare,
    PrimaryIngredients:req.body.PrimaryIngredients,
    CreateAt:req.body.CreateAt
   })
   const result = await ProductNameInfo.save()
   res.json(result)
})

app.get('/ingredients',async(req,res)=>{
    const ingredient = await ingredients.find({})
    console.log(ingredient)
    res.json(ingredient)
})

app.post('/ingredients',async(req,res)=>{
    console.log(req.body)
    const IngredientInfo = new ingredients({
        name:req.body.name,
        benefit:req.body.benefit,
        sensitiveSkin:req.body.sensitiveSkin,
        CreateAt:req.body.CreateAt
    })
    const result = await IngredientInfo.save()
    res.json(result)
})

app.listen(Port, ()=>{
    console.log(`Server is running on ${Port}`)
})


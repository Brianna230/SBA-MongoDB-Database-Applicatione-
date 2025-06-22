import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import db from './models/db.js'
import ingredients from './models/ingredients.js'
import users from './models/users.js'

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
app.get('/user',async(req,res)=>{
    const user = await users.find({})
    console.log(user)
    res.json(user)
})

app.post('/user',async(req,res)=>{
    console.log(req.body)
    const usersInfo = new users({
        name:req.body.name,
        skinType:req.body.skinType,
        skinConcerns:req.body.skinConcerns,
        allergies:req.body.allergies,
        CreateAt:req.body.CreateAt
    })
    const result = await usersInfo.save()
    res.json(result)
})
//Patch route
app.patch("/ProductName/:id",async(req,res)=>{
    const productnameUpdate = await db.findByIdAndUpdate(
        req.params.id,
        req.body
    )
   const resultUpdate = await productnameUpdate.save()
   res.send(resultUpdate)
})
app.delete("/ProductName/:id",async(req,res)=>{
    const productNameDelete = await db.findByIdAndDelete(
        req.params.id,
        req.body
    )
    res.send(productNameDelete)
})
//Delete route
app.delete("/user/:id",async(req,res)=>{
    const usersDelete = await users.findByIdAndDelete(
        req.params.id,
        req.body
    )
    res.send(usersDelete)
})
app.patch("/user/:id",async(req,res)=>{
    const usersUpdate = await users.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.send(usersUpdate)
})

app.patch("/ingredients/:id",async(req,res)=>{
    const ingredientsUpdate = await ingredients.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.send(ingredientsUpdate)
})
app.delete("/ingredients/:id",async(req,res)=>{
    const ingredientsDelete = await ingredients.findByIdAndDelete(
        req.params.id,
        req.body
    )
    res.send(ingredientsDelete)
})
app.listen(Port, ()=>{
    console.log(`Server is running on ${Port}`)
})


import express from 'express'
const router = express.Router()
import {createUser}from '../model/user/User.model.js'

router.all("*", (req,res,next)=>{
    next()
})

router.post("/",  async (req,res)=>{
    try{
      const result = await createUser(req.body)
      console.log(result)
        res.json({
            status:"success",
            message: "user creation success"
        })
    }catch (error){
        console.log(error)
        throw new Error(error.message)
    } 
})
export default router
const express = require('express')
const router = express.Router()
import {insertUser}from '../src/model/user/User.model'

router.all("*", (req,res,next)=>{
    next()
})

router.post("/",  async(req,res)=>{
    try{
      const result = await insertUser(newUserObj)
      console.log(result)
        res.json({
            status:"success",
            message: "login success"
        })
    }catch (error){
        console.log(error)
        throw new Error(error.message)
    } 
})
export default router
import express from 'express'
const router = express.Router()

import {addEmployee} from '../models/employee/Employee.model.js'

router.all("*", async(req,res, next)=>{
    next()
})

router.post("/", async(req,res)=>{
    try{
        const {name,email,date} = req.body
        const newEmployee = {
            ...req.body,
        }
        const result = await addEmployee(newEmployee)
        if(result?._id){
            return res.json({status:"success", message: "employee added", result})
        }
        res.json({ status: "error", message: "Invalid employee details" });

    }catch(error){
        console.log(error)
        res.send({
            status: "error",
            message: "Error! there is problem in our system please try again later"
        })
    }
})
export default router
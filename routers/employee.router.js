import express from 'express'
const router = express.Router()

import {addEmployee} from '../models/employee/Employee.model.js'

router.all("*", async(req,res, next)=>{
    next()
})

router.get("/", async (req,res)=>{
    try {
		const result = await addEmployee();
		res.json({
			status: "success",
			message: "Fetching success",
			result,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
})


router.post("/", async(req,res)=>{
    try{
      
        const result = await addEmployee(req.body)
        if(result._id){
            return res.json({status:"success", message: "employee added", result})
        }
        // res.json({ status: "error", message: "Invalid employee details" });
        // console.log(result)

    }catch(error){
        console.log(error)
        res.send({
            status: "error",
            message: "Error! there is problem in our system please try again later"
        })
    }
})
export default router
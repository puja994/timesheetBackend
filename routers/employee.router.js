import express from 'express'
const router = express.Router()

import {addEmployee} from '../models/employee/Employee.model.js'
import {getEmployee, deleteEmployees, updateEmployee} from '../models/employee/Employee.model.js'

router.all("*", async(req,res, next)=>{
    next()
})

router.get("/", async (req,res)=>{
    try {
		const result = await getEmployee();
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


router.delete("/", async (req, res) => {
	try {
		if (!req.body) {
			return res.json({
				status: "error",
				message: "Unable to add the employee, Please try again later",
			});
		}

		const result = await deleteEmployees(req.body);
		console.log(result);

		if (result?._id) {
			return res.json({
				status: "success",
				message: "employee has been deleted.",
				result,
			});
		}

		res.json({
			status: "error",
			message: "Unable to delete the employee, Please try again later",
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
})

router.put("/", async (req, res) => {
	console.log(req.body,"frmrouter");
	
	try {
		const result = await updateEmployee(req.body);
		if (result._id) {
			return res.json({
				status: "success",
				message: "Employee has been updated!",
				result,
			});
		}
		res.json({
			status: "error",
			message: "Error! Unable to update the Employee, Please try again later",
		});
	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
})

export default router
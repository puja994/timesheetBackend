import express from "express";
const router = express.Router();

import {saveTime} from '../models/shifts/Shifts.model.js'

import {getShifts, deleteShifts, getShiftById} from '../models/shifts/Shifts.model.js'

router.all("*", (req, res, next) => {
	next();
});

router.get("/", async (req,res)=>{
    try {
		const result = await getShifts();
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

router.get("/", async (req,res)=>{
    try {
		const result = await getShiftById();
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

router.post("/", async (req,res)=>{
    
    try{
        
       
        const result = await saveTime(req.body)
        console.log(result)
        if (result._id) {
            return res.json({
                status: "success",
                message: "Shift has been added!",
                result,
            });
        }

    }catch(error){
        console.log(error)
        res.send({
			status: "error",
			message:
				"Error! There is some problem in our system, please try again later.",
		})

    }
})

router.delete("/", async (req, res) => {
	try {
		if (!req.body) {
			return res.json({
				status: "error",
				message: "Unable to add the shift, Please try again later",
			});
		}

		const result = await deleteShifts(req.body);
		console.log(result);

		if (result?._id) {
			return res.json({
				status: "success",
				message: "The shift has been deleted.",
				result,
			});
		}

		res.json({
			status: "error",
			message: "Unable to delete the product, Please try again later",
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
});
export default router
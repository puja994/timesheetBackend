import express from "express";
const router = express.Router();

import {saveTime} from '../models/shifts/Shifts.model.js'

import {getShifts} from '../models/shifts/Shifts.model.js'

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

router.post("/", async (req,res)=>{
    // const {name, datetime} = req.body
    try{
        // const addtime = {
        //     ...req.body
        // }
       
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
export default router
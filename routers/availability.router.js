import express from "express";
const router = express.Router();

import {saveAvailability,getAvailability,deleteAvailability
} from '../models/availability/Availability.model.js'

router.all("*", (req, res, next) => {
	next();
});

router.get("/", async (req,res)=>{
    try {
		const result = await getAvailability();
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
       
        const result = await saveAvailability(req.body)
        console.log(result)
        if (result._id) {
            return res.json({
                status: "success",
                message: "availability has been added!",
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
				message: "Unable to add the availability, Please try again later",
			});
		}

		const result = await deleteAvailability(req.body);
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
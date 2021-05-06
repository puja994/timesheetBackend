import express from "express";
import { getUserByEmailAndRefreshJWT } from "../models/user/User.model.js";
import { verifyRefreshJwt, createAccessJWT } from "../helpers/jwt.helper.js";
const router = express.Router();

router.all("*", (req, res, next) => {
	next();
});

router.get("/", async (req, res) => {
	try {
		const { authorization } = req.headers;
		if (authorization) {
		
			const { email } = await verifyRefreshJwt(authorization);

		
			if (email) {
			
				const user = await getUserByEmailAndRefreshJWT({
					email,
					refreshJWT: authorization,
				});

				if (user._id) {
					const tokenExp = user.refreshJWT.addedAt;
					tokenExp.setDate(
						tokenExp.getDate() + +process.env.JWT_REFRESH_SECRET_EXP_DAY
					);
					const today = Date.now();
					
					if (tokenExp > today) {
						
						const accessJwt = await createAccessJWT(email, user._id);
						return res.json({
							status: "success",
							message: "Here is your new accessJWT",
							accessJwt,
						});

						
					}
				}
			}
		}

		res.status(403).json({
			status: "error",
			message: "Unauthorized!",
		});
	} catch (error) {
		res.status(403).json({
			status: "error",
			message: "Unauthorized!",
		});
	}
});

export default router;

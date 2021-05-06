import Joi from "joi";

const shortStr = Joi.string().max(100);
const longStr = Joi.string().max(2000);
const email = Joi.string().min(3).max(50).required();
const password = Joi.string().max(50).required();
const date = Joi.date().allow(null).allow("");
const num = Joi.number();
const args = Joi.array();
const boolean = Joi.boolean();

export const newUserValidation = (req, res, next) => {
	const schema = Joi.object({
		fName: shortStr.required(),
		lName: shortStr.required(),
		email,
		password,
		role: shortStr,
	});

	
	const value = schema.validate(req.body);

	if (value.error) {
		return res.json({
			status: "error",
			message: value.error.message,
		});
	}

	next();
};

export const loginValidation = (req, res, next) => {
	const schema = Joi.object({ email, password });


	const value = schema.validate(req.body);

	if (value.error) {
		return res.json({
			status: "error",
			message: value.error.message,
		});
	}

	next();
};



export const updatePasswordValidation = (req, res, next) => {
	try {
		req.body.otp = parseInt(req.body.otp);

		const schema = Joi.object({
			otp: num.required(),
			password: shortStr.required(),
			email,
		});

		const value = schema.validate(req.body);

		if (value.error) {
			return res.json({
				status: "error",
				message: value.error.message,
			});
		}

		next();
	} catch (error) {
		console.log(error);
		res.json({
			status: "error",
			message: "Unable to process your request, please try again later.",
		});
	}
};

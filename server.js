import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import path from "path";

import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("tiny"));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

import mongoClient from "./config/db.js";
mongoClient();


import { userAuthorization } from "./middlewares/authorization.middleware.js";


import loginRouter from "./routers/login.router.js";
import userRouter from "./routers/user.router.js";
import tokenRouter from "./routers/token.router.js";
import employeeRouter from './routers/employee.router.js'
import shiftRouter from './routers/shifts.router.js'
import availabilityRouter from './routers/availability.router.js'

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/token", tokenRouter);
app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/shifts", shiftRouter)
app.use("/api/v1/availability", availabilityRouter)

app.get("/", (req, res) => {
	res.send("Hello World");
});


app.use((req, res, next) => {
	const error = new Error("Resources not found");
	error.status = 404;

	next(error);
});


import { handleError } from "./utils/errorHandler.js";
app.use((error, req, res, next) => {
	handleError(error, res);
});

app.listen(PORT, error => {
	if (error) console.log(error);

	console.log(`Server is running at http://localhost:${PORT}`);
});

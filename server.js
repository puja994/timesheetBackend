import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()


import morgan from 'morgan'
import cors from 'cors'

app.use(cors())
app.use(morgan('tiny'))



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

import mongoClient from "./src/config/db.js";
mongoClient();

//loading the routers
import userRouter from "./src/routers/user.router.js";


//using apis
app.use("/api/v1/user", userRouter);


const PORT = process.env.PORT || 8000

app.get('/', (req,res)=>{
    res.send("time sheet system")
})

//404 return

app.use((req, res, next) => {
	const error = new Error("Resources not found");
	error.status = 404;

	next(error);
});

//handle error
import { handleError } from "./utils/errorHandler.js";
app.use((error, req, res, next) => {
	handleError(error, res);
});


app.listen(PORT, error =>{
    if(error) console.log(error)

    console.log(`server is running at http://localhost:${PORT}`)
})
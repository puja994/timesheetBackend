import mongoose from 'mongoose'

const ShiftSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        default: "",
    },
    date: {
        type: String,
        require: true,
        default: ""
    },
},
{
    timestamp: true,
})
const ShiftsSchema = mongoose.model("Shifts", ShiftSchema )
export default ShiftsSchema
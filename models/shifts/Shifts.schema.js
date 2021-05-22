import mongoose from 'mongoose'

const ShiftSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        default: "",
    },
    date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    time: {
        type: String,
        require: true,
        default:  "5:00"
    },
},
{
    timestamp: true,
})
const ShiftsSchema = mongoose.model("Shifts", ShiftSchema )
export default ShiftsSchema
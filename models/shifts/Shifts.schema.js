import mongoose from 'mongoose'

const ShiftSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        default: "",
    },
    datetime: {
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
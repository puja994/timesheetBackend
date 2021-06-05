import mongoose from 'mongoose'


const ShiftSchema = mongoose.Schema({

    date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    startTime: {
        type: String,
        require: true,
        default: "5:00"
    },
    endTime: {
        type: String,
        require: true,
        default: "10:00"
    },
    empInfo:[
        { name:{
        type: String,
        require: true,
        default: "Stranger"
            },
        eId:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            default: null,
        }
        }]
    
},
{
    timestamp: true,
})
const ShiftsSchema = mongoose.model("Shifts", ShiftSchema )
export default ShiftsSchema
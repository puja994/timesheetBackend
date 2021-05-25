import mongoose from 'mongoose'


const ShiftSchema = mongoose.Schema({

    date: {
            type: Date,
            require: true,
            default: Date.now()
        },
    shift:[{
        name: {
                type: String,
                require: true,
                default: "",
            },
        eId: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            default: null,

        },
        startTime:  {
                type: String,
                require: true,
                default:  "5:00"
            },
        endTime:  {
                type: String,
                require: true,
                default:  "5:00"
            },

    }]
    // name:{
    //     type: Array,
    //     require: true,
    //     default: [],
    // },
    // date: {
    //     type: Date,
    //     require: true,
    //     default: Date.now()
    // },
    // time: {
    //     type: String,
    //     require: true,
    //     default:  "5:00"
    // },
},
{
    timestamp: true,
})
const ShiftsSchema = mongoose.model("Shifts", ShiftSchema )
export default ShiftsSchema
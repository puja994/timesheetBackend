import mongoose from 'mongoose'


const AvailabilitySchema = mongoose.Schema({

    date: {
            type: String,
            require: true,
            default: "",
        },
    // shift:[{
    //     name: {
    //             type: String,
    //             require: true,
    //             default: "",
    //         },
    //     eId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         require: true,
    //         default: null,

    //     },
    //     startTime:  {
    //             type: String,
    //             require: true,
    //             default:  "5:00"
    //         },
    //     endTime:  {
    //             type: String,
    //             require: true,
    //             default:  "5:00"
    //         },

    // }]
    name:{
        type: String,
        require: true,
        default: "",
    },
    startTime: {
        type: String,
        require: true,
        default: "8:00",
    },
    endTime: {
        type: String,
        require: true,
        default:  "5:00"
    },
},
{
    timestamp: true,
})
const AvailableSchema = mongoose.model("availability", AvailabilitySchema )
export default AvailableSchema
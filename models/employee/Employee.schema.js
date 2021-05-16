import mongoose from 'mongoose'

const EmployeeSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: 1,
        require: true,
        default: "",
    },
    lName: {
        type: String,
        require: true,
        default: "",
    },
    addedAt: {
        type: Date,
        require: true,
        default: Date.now(),
    },
},
{
    timestamp: true,
}
)
const employeesSchema = mongoose.model("Employee", EmployeeSchema)
export default employeesSchema
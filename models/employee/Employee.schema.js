import mongoose from 'mongoose'

const EmployeeSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: 1,
        require: true,
        default: "",
    },
    name: {
        type: String,
        require: true,
        default: "",
    },

},
{
    timestamp: true,
}
)
const employeesSchema = mongoose.model("Employee", EmployeeSchema)
export default employeesSchema
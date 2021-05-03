import mongoose from 'mongoose'


const UserSchema = mongoose.Schema({
  
    email:{
        type: String,
        require: true,
        default: "",

    },
    password:{
        type:String,
        require: true,
        default: "",

    },
},
{
    timestamp: true,
},
)

const UserSchemas = mongoose.model("User", UserSchema);

export default UserSchemas;

  
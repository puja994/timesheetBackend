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
}
)

const UserSchema = mongoose.model("User", UserSchema);

export default UserSchema;

  
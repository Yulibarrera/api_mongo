import { Schema, model} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists '],
        minlength: [10, 'Min length 10 caracters'],
        maxlength: [16, 'Max length 16 caracters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],

    }
},
{  
    timestamps: true,  //to audit. save type and time the transaction
    versionkey: false
}
)

export default model('User', userSchema, 'user')
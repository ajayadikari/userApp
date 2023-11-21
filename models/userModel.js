import mongoose from 'mongoose'

const schema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "firstname required"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "lastname required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email required"],
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        required: [true, "gender required"],
        enum: ["male", "female", 'agender']
    },
    avatar: {
        type: String
    },
    domain: {
        type: String,
        required: [true, 'domain required']
    },
    available: {
        type: Boolean,
        required: [true, 'availability required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



const users = mongoose.model('users', schema)
export default users
import mongoose from "mongoose";


const schema = mongoose.Schema({
    userId:{
        type: String, 
        required: [true, 'user id is required']
    },
    name:{
        type: String, 
        required: [true, 'Team name is required'], 
        trim: true,
        unique: true
    }, 
    team_members: {
        type: Array, 
        maxlength: 6,
    }
})


const teamModel = mongoose.model('teamModel', schema);
export default teamModel
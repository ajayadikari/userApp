import mongoose from 'mongoose'
import color  from 'colors'


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db connection is successfull')
    } catch (error) {
        console.log('error occured while connecting to db')
        console.log(error)
    }
}


export default connectDb
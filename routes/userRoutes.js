import express from 'express'
import { getUsers, getUserById, createUser } from '../controllers/userController.js'
import { login } from '../middlewares/auth.js'
const userRouter = express.Router()

userRouter.route('/users')
    .get(getUsers)
    .post(createUser)

userRouter.route('/users/:id')
    .get(getUserById)


userRouter.route('/users/login')
    .post(login, (req, res)=>{
        console.log(req.body)
        res.status(200).json({
            success: true,
            message: 'user logged in successfully', 
            id: req.data._id,
        })
    })



    
export default userRouter
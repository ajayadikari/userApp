import users from "../models/userModel.js"

const login = async (req, res, next) => {
    try {
        const email = req.body
        const user = await users.findOne(email)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'user not found',
            })
            
        }
        req.data = user;
        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}


export {login}
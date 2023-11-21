import teamModel from "../models/teamModel.js"

const getAllTeams = async (req, res) => {
    try {
        const teams = await teamModel.find({})
        res.status(200).json({
            success: true,
            message: 'data of all teams',
            data: teams
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}


const createTeam = async (req, res) => {
    try {
        const { name, team, userId } = req.body;
        const newTeam = await new teamModel({
            name: name,
            team_members: [...team],
            userId: userId
        }).save();
        res.status(200).json({
            success: true,
            message: 'team created successfully',
            newTeam
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'error occured while creating team',
            error: error.message
        })
    }
}

const getTeam = async (req, res) => {
    try {
        const userId = req.body;
        console.log(userId)
        const data = await teamModel.findOne(userId)

        if (data) {
            res.status(200).json({
                success: true,
                message: 'team fetched successsfully',
                data
            })
        }
        else {
            res.status(200).json({
                success: false,
                message: 'team not found',
                data
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'team fetch is unsuccessfull',
        })
    }
}


const userTeam = async (req, res) => {
    try {
        const userId = req.body;
        console.log(userId)
        const data = await teamModel.findOne(userId)

        if (data) {
            res.status(200).json({
                success: true,
                message: 'team fetched successsfully',
                data
            })
        }
        else {
            res.status(200).json({
                success: false,
                message: 'team not found',
                data
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'team fetch is unsuccessfull',
        })
    }
}






export { getAllTeams, createTeam, getTeam, userTeam }
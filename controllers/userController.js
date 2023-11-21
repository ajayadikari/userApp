import users from '../models/userModel.js'

const getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = 20;
        const skip = (page - 1) * limit;
        // const total_pages = Math.ceil(await users.countDocuments() / limit);

        let domain = req.query.domain || '';
        let gender = req.query.gender || '';
        let available = (Boolean)(req.query.available) || "";
        domain = domain.charAt(0).toUpperCase() + domain.slice(1);
        gender = gender.charAt(0).toUpperCase() + gender.slice(1);

        const query = {};
        if (domain && domain !== '') query.domain = domain;
        if (gender && gender !== '') query.gender = gender;
        if (available!=null && available !== '') query.available = available;

        console.log(query)
        const data = await users.find(query);
        const usersData = await users.find(query).skip(skip).limit(limit);
        const total_pages = Math.ceil(data.length / limit) === 0 ? 1 : Math.ceil(data.length / limit)
        if(total_pages == 0) total_pages = 1;
        // console.log(total_pages)


        res.status(200).json({
            success: true,
            message: 'All users data',
            data: usersData,
            total_pages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching users data',
            error
        });
    }
};


const getUserById = async (req, res) => {
    try {
        const id = (req.params.id);
        const user = await users.findById(id)
        res.status(200).json({
            success: true,
            message: "user found",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error fetching user data",
            error
        })
    }
}

const createUser = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            gender,
            avatar,
            domain,
            availability
        } = req.body


        const user = await users.create({
            firstname,
            lastname,
            email,
            gender,
            avatar,
            domain,
            available: true
        })

        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: user
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error occured while creating user",
            error: error.message
        })
    }
}


export { getUsers, getUserById, createUser }

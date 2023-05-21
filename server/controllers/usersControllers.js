const User = require("../models/usersModel");
const usersWS = require("../DAL/usersWS");

const loadUsersOnMongo = async () => {

    try {
        const count = await User.estimatedDocumentCount();
        if (count === 0) {
            const resp = await usersWS.getUsersFromWS();
            const allUsers = resp.data;
            let users = allUsers.map(user => {
                return { userName: user.email, password: user.username + user.address.zipcode }
            })
            await User.insertMany(users);
            console.log("Data inserted!!");
        }
        else {
            console.log(`users collection is fill with ${count} documents`);
        }

    }
    catch (error) {
        throw err;
    }

}


const getUsers = async (req, res, next) => {

    try {
        const users = await User.find({});
        res.json(users);

    }
    catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {

    const userID = req.params.id;

    try {
        const user = await User.findById(userID);
        if (!user) {
            res.status(400).json({ message: "User is not found" });
        }
        else {
            res.json(user);
        }

    }
    catch (error) {
        next(error);
    }
}

const addUser = async (req, res, next) => {

    try {
        const userIsExist = await User.findOne({ userName: req.body.userName });
        if (userIsExist) {
            res.status(409).json({ message: "This user already exist" });
        }
        else {
            const newUser = new User({
                userName: req.body.userName,
                password: req.body.password
            })
            await newUser.save();
            res.status(201).json({ message: "User was created", newUser: newUser });
        }

    }
    catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {

    const userID = req.params.id;
    const updatedUser = req.body;
    try {
        const userToUpdate = await User.findOne({ _id: userID });
        if (!userToUpdate) {
            res.status(400).json({ message: "User is not found" });
        }
        else {
            await User.findByIdAndUpdate(userID, updatedUser);
            res.status(200).json({ message: "User was updated", updatedUser: updatedUser });
        }

    }
    catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
  
    const userID = req.params.id;
    try {
        const userToDelete = await User.findOne({ _id: userID });
        if (!userToDelete) {
            res.status(400).json({ message: "User is not found" });
        }
        else {
            await User.findByIdAndDelete(userID);
            res.status(200).json({ message: "User was deleted", deletedUser: userToDelete });
        }

    }
    catch (error) {
        next(error);
    }
}


module.exports = { loadUsersOnMongo, getUsers, getUser, addUser, updateUser, deleteUser };
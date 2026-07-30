const User = require("../models/User");

let users = [];

const registerUser = (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = new User(
        users.length + 1,
        name,
        email,
        password
    );

    users.push(newUser);

    res.status(201).json({
        message: "Registration Successful",
        user: newUser
    });
};

const loginUser = (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    res.status(200).json({
        message: "Login Successful",
        user
    });
};

module.exports = {
    registerUser,
    loginUser
};
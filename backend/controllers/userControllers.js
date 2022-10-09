const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@route GET /Users
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})


//@route POST /Users
const createtUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, address} = req.body

    if(!(firstName && lastName && email && address)) {
        res.status(400)
        throw new Error('Please add all the required user information')
    }

    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address
    })

    res.status(200).json({user})
})


//@route PUT /Users/:id
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedUser)
})


//@route DELETE /Users/:id
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove()

    res.status(200).json({message: 'User with id:' + req.params.id + ' has been deleted'})
})


module.exports = {getUsers, createtUser, updateUser, deleteUser}
const express = require('express')
const router = express.Router()
const {getUsers, createtUser, updateUser, deleteUser} = require('../controllers/userControllers')

router.get('/', getUsers)

router.post('/', createtUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)


module.exports = router
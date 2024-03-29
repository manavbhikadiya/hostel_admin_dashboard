const express = require("express");
const route = express.Router();

const {uploadProfileController, updateUser, deleteUser, createUser, loginUser, forgotPassword, addFavouriteHostel,getUserData} = require('../controllers/userController')
const {uploadProfile} = require('../middleware/file')

route.post('/', createUser)

route.post('/loginUser/:email',loginUser)

route.post('/forgotpassword/:email', forgotPassword)

route.post('/addFavourite/:user_id/:hostel_id', addFavouriteHostel)

route.post('/upload/:id',uploadProfile.single("profile"), uploadProfileController)

route.post('/update/:id', uploadProfile.single("profile"), updateUser)

route.get('/getUserData/:userId',getUserData)

route.post('/delete/:id', deleteUser)

module.exports = route;
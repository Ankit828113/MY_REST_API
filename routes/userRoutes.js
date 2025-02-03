const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

// Define routes
router.get('/users', getAllUsers); // Fetch all users
router.get('/users/:id', getUserById); // Fetch user by ID
router.post('/user', addUser); // Add a new user
router.put('/user/:id', updateUser); // Update user by ID
router.delete('/user/:id', deleteUser); // Delete user by ID

module.exports = router;

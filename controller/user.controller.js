import express from "express";

const userController = express.Router();

userController.get('/', async (req, res) => {
    res.status(200).json({
        status: 'user controller API called successfully'
    })
});

export default userController
import express from 'express';
import { User } from '../database/models/index.js';

const userController = express.Router();

/**
 * GET/
 * retrieve and display all Users in the User Model
 */
userController.get('/users', (req, res) => {
  User
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to fetch users\n'+ err);
    });
});
/**
   * POST/
   * Add a new User to your database
   */
userController.post('/add-user', (req, res) => {
  const { email } = req.body;
  const userData = {
    email
  };
  const newUser = new User(userData);
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to save to database\n'+ err);
    });
});

export default userController;

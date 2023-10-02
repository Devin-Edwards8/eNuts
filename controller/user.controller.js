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
 * GET/
 * retrieve and display user based on username
 */
userController.get('/user', (req, res) => {
  const user = User.findOne({username: req.query.user.username})
    .catch(err => res.status.send('unable to fetch user info\n' + err))
  if(user == null) {
    User.insertOne({email: req.query.user.email})
  } else {
    res.send(user)
  }
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

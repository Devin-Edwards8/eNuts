import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { userController } from './controller/index.js';

const atlasUri = 'mongodb+srv://enutsadmin:R1x5NRMcpW5l5ujb@cluster0.cpim715.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userController);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
  mongoose.connect(atlasUri).then(() => {
    console.log('Connected to mongodb at port 27017');
  });
});

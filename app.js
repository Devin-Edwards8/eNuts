import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { userController, productController } from './controller/index.js';
import './load.environment.js';

const atlasUri = process.env.ATLAS_URI || "";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', userController);
app.use('/', productController);

app.listen(PORT, () => {
  console.log('Server is running on port 8080');
  mongoose.connect(atlasUri).then(() => {
    console.log('Connected to mongodb at port 27017');
  });
});

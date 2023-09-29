import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { userController, productController } from './controller/index.js';
import './load.environment.js';

const d = new Date();

const atlasUri = process.env.ATLAS_URI || "";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/server/', userController);
app.use('/server/', productController);

app.listen(PORT, () => {
  console.log(`${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`)
  console.log('Server is running on port 8080');
  mongoose.connect(atlasUri).then(() => {
    console.log('Connected to mongodb at port 27017');
  });
});

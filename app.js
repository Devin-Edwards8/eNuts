import express from 'express';
import bodyParser from 'body-parser';
import { userController } from './controller/index.js';
import mongoose from 'mongoose';

const atlas_uri = "mongodb+srv://enutsadmin:R1x5NRMcpW5l5ujb@cluster0.cpim715.mongodb.net/?retryWrites=true&w=majority"

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userController);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
    mongoose.connect(atlas_uri).then(() => {
        console.log('Connected to mongodb at port 27017')
    });
});
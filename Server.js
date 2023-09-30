import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import AdminRouter from './Router/AdminRouter.js';
import SendDataRouter from './Router/SendDataRouter.js'
import GoldRouter from './Router/GoldRouter.js'
import DiamondRouter from './Router/DiamondRouter.js'; 
import authenticateToken from './Config/Authenticationtoken.js';

const app = express();

const url = "mongodb+srv://Asad:123@cluster0.l0az3ee.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/CreateAccount', AdminRouter);
app.use('/login',authenticateToken, AdminRouter);
app.use('/RingData',authenticateToken, SendDataRouter);
app.use('/GoldData',authenticateToken, GoldRouter);
app.use('/DiamondData',authenticateToken, DiamondRouter);
//Get Data
app.use('/Ring',authenticateToken, SendDataRouter);
app.use('/Gold',authenticateToken, GoldRouter);
app.use('/Diamond',authenticateToken, DiamondRouter);


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

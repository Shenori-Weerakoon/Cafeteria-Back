const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection successfully");
});

const menuItem = require('./routes/menuItem.js');
app.use('/menuItem', menuItem);

const user = require('./routes/user.js');
app.use('/user', user);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
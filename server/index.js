const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const postRoutes = require('./routes/posts.js');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); //Express Built-in Body Parser
app.use(express.urlencoded({
    extended: true
})); /**The urlencoded method within body-parser tells body-parser to extract data
from the html element and add them to the body property in the request object. 
We can access these using req.body*/
app.use(cors());

app.use('/posts', postRoutes); //All routes with suffix '/posts' is handled by postRoutes

mongoose.connect(process.env.MongoDb, 
    {useNewUrlParser: true, useUnifiedTopology: true}) //Connecting to DB
    .then(()=> app.listen(PORT, ()=> console.log(`Listening to PORT ${PORT}`)))
    .catch((err)=> console.log('Error Connecting to DB' , err.message));

mongoose.set('useFindAndModify', false); //Setting variable and its value
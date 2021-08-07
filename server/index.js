const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const postRoutes = require("./routes/posts.js");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json({limit: '50mb'}));
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  })
); 
app.use(cors());

app.use("/posts", postRoutes); //All routes with suffix '/posts' is handled by postRoutes
app.get('/', (req,res) => {
  res.send('MemPic API: gitHub.com/toth2000/memPic');
})

mongoose
  .connect(process.env.MongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) //Connecting to DB
  .then(() => app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`)))
  .catch((err) => console.log("Error Connecting to DB", err.message));

mongoose.set("useFindAndModify", false); //Setting variable and its value

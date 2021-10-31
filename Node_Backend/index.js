const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//import routes
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');


//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// use routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to this application</h1>");
});



mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MONGO_DB_ERROR: ", err)
);

app.listen(8000, () => {
    console.log("The Backed Server is up!");
});
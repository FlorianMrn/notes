// REQUIRES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// MIDDLEWARES FOR CORS AND JSON
app.use(cors());
app.use(express.json());


// DB CONNECTION
mongoose
  .connect(process.env.DATABASE_URI, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// ROUTES

// Routers are required
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

// PORT
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});
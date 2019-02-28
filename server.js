const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

let User = require('./models/user.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function(){
  console.log("server started on port: " + PORT + " teehee");
});

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFiles);
//
// app.use(express.static(path.join(__dirname, "balloon-popper")));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.use("/api", users);

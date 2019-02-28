const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log("server started on port: " + PORT);
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

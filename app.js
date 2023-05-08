require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/movie");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// use routes defined in the routes directory
app.use("/movies", routes);

// start the server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

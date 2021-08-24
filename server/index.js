const express = require("express");
const app = express();
require("dotenv").config();
const users = require("./routes/users");

const { PORT } = process.env;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", users);

app.listen(PORT, () => {
  console.log("listening on port 5000 ");
});

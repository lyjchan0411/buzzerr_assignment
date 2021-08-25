const express = require("express");
const app = express();
const users = require("./routes/users");
const activities = require("./routes/activities");
const cors = require("cors");

const PORT = "5000";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", users);
app.use("/activities", activities);

app.listen(PORT, () => {
  console.log("listening on port 5000 ");
});

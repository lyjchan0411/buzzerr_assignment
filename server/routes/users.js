const express = require("express");
const router = express.Router();
usersData = require("../data/MOCK_DATA.json");

router.get("/", (req, res) => {
  res.status(200).json(usersData);
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  let selectedUser = usersData.filter((user) => user._id === parseInt(userId));
  res.status(200).json(selectedUser);
});

module.exports = router;

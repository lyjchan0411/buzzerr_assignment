const express = require("express");
const router = express.Router();
usersData = require("../data/MOCK_DATA.json");

router.get("/", (req, res) => {
  res.status(200).json(usersData);
});

module.exports = router;

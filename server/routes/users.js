const express = require("express");
const router = express.Router();
usersData = require("../data/MOCK_DATA.json");

router.get("/", (req, res) => {
  let searchValue = req.query.searchValue;
  if (searchValue !== "") {
    let filteredArr =
      usersData &&
      usersData.filter(
        (user) => user.name.toLowerCase().indexOf(searchValue) === 0
      );
    res.status(200).json(filteredArr);
  } else {
    res.status(200).json([]);
  }
});

module.exports = router;

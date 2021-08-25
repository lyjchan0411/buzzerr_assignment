const express = require("express");
const router = express.Router();
usersData = require("../data/MOCK_DATA.json");

router.get("/", (req, res) => {
  // let searchValue = req.query.searchValue;
  // if (searchValue !== "") {
  //   let filteredArr =
  //     usersData &&
  //     usersData.filter(
  //       (user) =>
  //         user.name.toLowerCase().indexOf(searchValue) === 0 ||
  //         user.company.toLowerCase().indexOf(searchValue) === 0
  //     );
  //   res.status(200).json(filteredArr);
  // } else {
  //   res.status(200).json([]);
  // }
  res.status(200).json(usersData);
  // let obj = {};
  // let arr = [];

  // usersData.forEach((user) => {
  //   obj[user.name] = obj[user.name] ? obj[user.name] + 1 : 1;
  //   if (obj[user.name] !== 1) {
  //     arr.push(user.name);
  //   }
  // });

  // console.log(obj)
});

module.exports = router;

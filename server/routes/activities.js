const express = require("express");
const router = express.Router();
usersData = require("../data/MOCK_DATA.json");

const currentDate = new Date();
const currentDateWithTime = currentDate.getTime();
const last30DaysDate = new Date(
  currentDate.setDate(currentDate.getDate() - 30)
);
const last30DaysDateWithTime = last30DaysDate.getTime();

const last30DaysPostData = usersData.filter((post) => {
  let postDate = new Date(post.date_posted).getTime();
  if (postDate <= currentDateWithTime && postDate > last30DaysDateWithTime)
    return true;
});

last30DaysPostData.sort((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});

router.get("/", (req, res) => {
  res.status(200).json(last30DaysPostData);
});

module.exports = router;

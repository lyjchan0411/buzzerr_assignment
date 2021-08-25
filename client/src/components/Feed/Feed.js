import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";
import axios from "axios";
import Post from "../Post/Post";
import ActivityTable from "../ActivityTable/ActivityTable";
import "./Feed.scss";

export default function Feed() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [usersData, setUsersData] = useState();
  const [filteredValues, setFilteredValues] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);
  const URL = "http://localhost:5000/users";

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const onClickHandler = (id) => {
    let filteredArr = usersData && usersData.filter((user) => user._id === id);
    setSelectedUser([...filteredArr]);
  };

  useEffect(() => {
    // axios
    //   .get(URL, {
    //     params: {
    //       searchValue: searchValue.toLowerCase(),
    //     },
    //   })
    //   .then((res) => {
    //     setUsersData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(URL)
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (searchValue !== "") {
      let filteredArr =
        usersData &&
        usersData.filter(
          (user) => user.name.toLowerCase().indexOf(searchValue) === 0
        );
      setFilteredValues(filteredArr);
    } else {
      setFilteredValues("");
    }
  }, [searchValue, modalToggle]);

  return (
    <div className="feed">
      <div className="feed__header-container">
        <h2 className="feed__header">Home</h2>
        <div className="feed__searchbar-container">
          <input
            type="text"
            onChange={onChangeHandler}
            className="feed__searchbar"
            placeholder="Type here to search for specific user"
          />
          <DropDownList
            filteredValues={filteredValues}
            onClickHandler={onClickHandler}
          />
        </div>
      </div>
      <Post usersData={usersData} />
      <ActivityTable />
    </div>
  );
}

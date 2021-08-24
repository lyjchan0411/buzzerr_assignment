import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";
import axios from "axios";
import Modal from "../Modal/Modal";
import ActivityTable from "../ActivityTable/ActivityTable";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [usersData, setUsersData] = useState();
  const [modalToggle, setModalToggle] = useState(false);
  const URL = "http://localhost:5000/users";

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const onClickHandler = (id) => {
    let filteredArr = usersData && usersData.filter((user) => user._id === id);
    setSelectedUser([...filteredArr]);
    setModalToggle(!modalToggle);
  };

  useEffect(() => {
    axios
      .get(URL, {
        params: {
          searchValue: searchValue.toLowerCase(),
        },
      })
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue, modalToggle]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <Modal selectedUser={selectedUser[0]} modalToggle={modalToggle} />
      <DropDownList usersData={usersData} onClickHandler={onClickHandler} />
      <ActivityTable />
    </div>
  );
}

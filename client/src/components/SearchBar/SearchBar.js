import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";
import axios from "axios";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const [usersData, setUsersData] = useState();
  const URL = "http://localhost:5000/users";

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const onClickHandler = (id) => {
    console.log(id);
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
  }, [searchValue]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <DropDownList
        usersData={usersData}
        onClickHandler={onClickHandler}
      />
    </div>
  );
}

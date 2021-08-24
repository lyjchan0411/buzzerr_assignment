import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";

export default function SearchBar({ usersData }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    let filteredArr =
      usersData &&
      usersData.filter(
        (user) => user.name.toLowerCase().indexOf(searchValue) === 0
      );
    setFilteredValues(filteredArr);
  }, [searchValue]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <DropDownList filteredValues={filteredValues} />
    </div>
  );
}

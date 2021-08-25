import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";
import axios from "axios";
import Post from "../Post/Post";
import ActivityTable from "../ActivityTable/ActivityTable";
import "./Feed.scss";
import Pagination from "../Pagination/Pagination";

export default function Feed() {
  const [searchValue, setSearchValue] = useState("");
  const [usersData, setUsersData] = useState();
  const [filteredValues, setFilteredValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const URL = "http://localhost:5000/users";

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  //Setting up Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    usersData && usersData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
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
          (user) =>
            user.name.toLowerCase().includes(searchValue) ||
            user.company.toLowerCase().includes(searchValue)
        );
      setFilteredValues(filteredArr);
    } else {
      setFilteredValues("");
    }
  }, [searchValue]);

  return (
    <div className="feed">
      <div className="feed__header-container">
        <h2 className="feed__header">Home</h2>
        <div className="feed__searchbar-container">
          <input
            type="text"
            onChange={onChangeHandler}
            className="feed__searchbar"
            placeholder="Search for an user by the name or company"
          />
          <DropDownList filteredValues={filteredValues} />
        </div>
      </div>
      <Post usersData={currentPosts} />
      <ActivityTable />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={usersData && usersData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDownList from "../../components/DropDownList/DropDownList";
import axios from "axios";
import Post from "../../components/Post/Post";
import "./MainPage.scss";
import Pagination from "../../components/Pagination/Pagination";

export default function MainPage() {
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
        //Sorting the post by the date
        let data = res.data;
        data.sort(
          (a, b) =>
            new Date(
              `${b.date_posted.substring(6, 11)}-${b.date_posted.substring(
                3,
                5
              )}-${b.date_posted.substring(0, 2)}`
            ) -
            new Date(
              `${a.date_posted.substring(6, 11)}-${a.date_posted.substring(
                3,
                5
              )}-${a.date_posted.substring(0, 2)}`
            )
        );
        setUsersData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    //Searchbar value. Search by name or company name
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
        <h2 className="feed__header" onClick={() => paginate(1)}>
          Home
        </h2>
        <div className="feed__searchbar-container">
          <input
            type="text"
            onChange={onChangeHandler}
            className="feed__searchbar"
            placeholder="Search for an user by the name or company"
          />
          <DropDownList filteredValues={filteredValues} />
        </div>
        <div className="activity-link">
          <Link to="/activities_table">Activity table</Link>
        </div>
      </div>
      <Post usersData={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={usersData && usersData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

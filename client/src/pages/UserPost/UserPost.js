import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post";
import ActivityTable from "../../components/ActivityTable/ActivityTable";
import "./UserPost.scss";

export default function UserPost(props) {
  const [user, setUser] = useState();
  let id = props.match.params.id;
  let URL = "http://localhost:5000/users/";

  useEffect(() => {
    axios
      .get(`${URL}${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="userpost">
      <div className="userpost__header-container">
        <Link to="/">Back</Link>
        <h2 className="userpost__header">{user && user[0].name}'s Post(s)</h2>
      </div>
      <Post usersData={user} />
      <ActivityTable user={user} />
    </div>
  );
}

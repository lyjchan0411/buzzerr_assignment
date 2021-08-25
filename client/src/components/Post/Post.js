import React from "react";
import "./Post.scss";

export default function Post({ usersData }) {

  return (
    <div className="post-container">
      {usersData &&
        usersData.map((user) => {
          return (
            <div key={user._id} className="post">
              <img
                className="post__image"
                src={user.profile_pic}
                alt="profile"
              />
              <div className="post__content-container">
                <h3 className="post__name">{user.name}</h3>
                <h5 className="post__date">{user.date_posted}</h5>
                <h5 className="post__content">{user.post_content}</h5>
                <h5 className="post__likes">Likes: {user.likes}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

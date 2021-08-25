import React from "react";
import "./Post.scss";

export default function Post({ usersData }) {
  usersData &&
    usersData.sort(
      (a, b) =>
        new Date(
          `${b.date_posted.substring(3, 5)}/${b.date_posted.substring(
            0,
            2
          )}/${b.date_posted.substring(6, 11)}`
        ) -
        new Date(
          `${a.date_posted.substring(3, 5)}/${a.date_posted.substring(
            1,
            2
          )}/${a.date_posted.substring(6, 11)}`
        )
    );

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

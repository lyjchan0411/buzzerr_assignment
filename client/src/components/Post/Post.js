import React from "react";

export default function Post({ usersData }) {
  // if (usersData) {
  //   let sortedDateData = [
  //     ...usersData.sort(function (a, b) {
  //       return new Date(b.date_posted) - new Date(a.date_posted);
  //     }),
  //   ];
  //   console.log(sortedDateData);
  // }

  console.log(
    usersData &&
      new Date(
        `${usersData[0].date_posted.substring(
          3,
          5
        )}/${usersData[0].date_posted.substring(
          0,
          2
        )}/${usersData[0].date_posted.substring(6, 11)}`
      ) -
        new Date(
          `${usersData[1].date_posted.substring(
            3,
            5
          )}/${usersData[1].date_posted.substring(
            1,
            2
          )}/${usersData[1].date_posted.substring(6, 11)}`
        )
  );

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
    <div>
      {usersData &&
        usersData.map((user) => {
          return (
            <div key={user._id} className="post">
              <img
                className="post-image"
                src={user.profile_pic}
                alt="profile"
              />
              <h3 className="post-name">{user.name}</h3>
              <h5 className="post-date">{user.date_posted}</h5>
              <h5 className="post-likes">{user.likes}</h5>
              <h5 className="post-content">{user.post_content}</h5>
            </div>
          );
        })}
    </div>
  );
}

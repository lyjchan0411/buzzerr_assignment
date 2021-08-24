import React from "react";

export default function DropDownList({ usersData, onClickHandler }) {
  return (
    <td>
      {usersData &&
        usersData.map((user) => {
          return (
            <tr key={user._id} onClick={() => onClickHandler(user._id)}>
              {user.name}
            </tr>
          );
        })}
    </td>
  );
}

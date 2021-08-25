import React from "react";

export default function DropDownList({ filteredValues, onClickHandler }) {
  return (
    <td>
      {filteredValues &&
        filteredValues.map((user) => {
          return (
            <tr key={user._id} onClick={() => onClickHandler(user._id)}>
              {user.name}
            </tr>
          );
        })}
    </td>
  );
}

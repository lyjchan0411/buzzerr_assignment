import React from "react";
import "./DropDownList.scss";

export default function DropDownList({ filteredValues, onClickHandler }) {
  return (
    <td className="dropDownList">
      {filteredValues &&
        filteredValues.map((user) => {
          return (
            <tr
              key={user._id}
              onClick={() => onClickHandler(user._id)}
              className="dropDownList__item"
            >
              {user.name}
            </tr>
          );
        })}
    </td>
  );
}

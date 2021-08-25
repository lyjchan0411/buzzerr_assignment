import React from "react";
import { Link } from "react-router-dom";
import "./DropDownList.scss";

export default function DropDownList({ filteredValues }) {
  return (
    <td className="dropDownList">
      {filteredValues &&
        filteredValues.map((user) => {
          return (
            <Link to={`/user/${user._id}`}>
              <tr key={user._id} className="dropDownList__item">
                {user.name}
              </tr>
            </Link>
          );
        })}
    </td>
  );
}

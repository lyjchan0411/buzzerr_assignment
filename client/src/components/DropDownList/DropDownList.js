import React from "react";

export default function DropDownList({ filteredValues }) {
  return (
    <td>
      {filteredValues &&
        filteredValues.map((user) => {
          return <tr>{user.name}</tr>;
        })}
    </td>
  );
}

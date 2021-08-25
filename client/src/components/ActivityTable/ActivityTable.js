import React from "react";
import "./ActivityTable.scss";

export default function ActivityTable({ user }) {
  let totalPost = user && user.length;
  return (
    <table className="table">
      <thead>
        <th colSpan="3" className="table__header">
          User Activity in the past 30 Days
        </th>
      </thead>
      <tbody>
        <td className="table__item">Username</td>
        <td className="table__item table__item-middle">Total Posts</td>
        <td className="table__item">Total Likes</td>
      </tbody>
      {user &&
        user.map((user) => {
          return (
            <tbody>
              <td className="table__item">{user.name}</td>
              <td className="table__item table__item-middle">{totalPost}</td>
              <td className="table__item">{user.likes}</td>
            </tbody>
          );
        })}
    </table>
  );
}

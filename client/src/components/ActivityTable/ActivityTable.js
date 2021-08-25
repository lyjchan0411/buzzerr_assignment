import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActivityTable.scss";

export default function ActivityTable({ user }) {
  const [tableData, setTableData] = useState();
  let URL = "http://localhost:5000/activities";
  let totalPost = user && user.length;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {tableData &&
        tableData.map((post) => {
          return (
            <tbody key={post._id}>
              <td className="table__item">{post.name}</td>
              <td className="table__item table__item-middle">
                {tableData &&
                  tableData.filter((user) => user.name === post.name).length}
              </td>
              <td className="table__item">{post.likes}</td>
            </tbody>
          );
        })}
    </table>
  );
}

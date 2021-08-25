import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ActivityTable.scss";

export default function ActivityTable({ user }) {
  const [tableData, setTableData] = useState();
  let URL = "http://localhost:5000/activities";

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
    <div className="activityTable">
      <div className="activityTable__header-container">
        <Link to="/">Back</Link>
        <h2 className="activityTable__header">Activities Table</h2>
      </div>
      <table className="table">
        <tr>
          <th colSpan="3" className="table__header">
            User Activity in the past 30 Days
          </th>
        </tr>
        <tr>
          <td className="table__item table__item-top-row">Username</td>
          <td className="table__item table__item-top-row">Total Posts</td>
          <td className="table__item table__item-top-row">Total Likes</td>
        </tr>
        {tableData &&
          tableData.map((post) => {
            return (
              <tr key={post._id}>
                <td className="table__item">{post.name}</td>
                <td className="table__item">
                  {tableData &&
                    tableData.filter((user) => user.name === post.name).length}
                </td>
                <td className="table__item">{post.likes}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

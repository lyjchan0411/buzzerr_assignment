import React from "react";
import "./Pagination.scss";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => {
          if (currentPage === num) {
            return (
              <li
                key={num}
                className="pagination__item pagination__active-item"
                onClick={() => {
                  paginate(num);
                  window.scroll(0, 0);
                }}
              >
                {num}
              </li>
            );
          } else {
            return (
              <li
                key={num}
                className="pagination__item"
                onClick={() => {
                  paginate(num);
                  window.scroll(0, 0);
                }}
              >
                {num}
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

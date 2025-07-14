import React from "react";
import Link from "next/link";

const paginationPrev = "/icon/pagination_icon01.svg";
const paginationNext = "/icon/pagination_icon02.svg";

export const ProductPagination = (currentPage, totalPages, onPageChange) => {
  return (
    <nav className="pagination__wrap mt-50">
      <ul className="list-wrap">
        <li className="link-arrow">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={paginationPrev} alt="Previous" className="injectable" />
          </button>
        </li>
        {pages.map((p) => (
          <li key={p} className={currentPage === p ? "active" : ""}>
            <button onClick={() => onPageChange(p)}>{p}</button>
          </li>
        ))}
        
        <li className="link-arrow">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={paginationNext} alt="Next" className="injectable" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

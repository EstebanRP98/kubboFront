import React from "react";
import Link from "next/link";

const paginationPrev = "/icon/pagination_icon01.svg";
const paginationNext = "/icon/pagination_icon02.svg";

export const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
    // Opcional: Desplazarse al inicio de la página o de la lista de productos
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="pagination__wrap mt-50">
      <ul className="list-wrap">
        <li className={`link-arrow ${currentPage === 1 ? 'disabled' : ''}`}>
          <Link href="#" onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}>
            <img src={paginationPrev} alt="Previous" className="injectable" />
          </Link>
        </li>

        {pages.map((pageNumber) => (
          <li key={pageNumber} className={pageNumber === currentPage ? "active" : ""}>
            <Link href="#" onClick={() => handlePageClick(pageNumber)}>
              {pageNumber}
            </Link>
          </li>
        ))}

        <li className={`link-arrow ${currentPage === totalPages ? 'disabled' : ''}`}>
          <Link href="#" onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}>
            <img src={paginationNext} alt="Next" className="injectable" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
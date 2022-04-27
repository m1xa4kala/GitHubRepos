import React from 'react'
import './pagination.scss'

export default function Pagination({
  pages,
  currentPage,
  totalPages,
  paginationHandler,
}) {
  return (
    <div className="pagination">
      <button
        className="btn pagination__prev"
        disabled={currentPage === 1}
        onClick={() => paginationHandler(currentPage - 1)}
      >
        Prev
      </button>
      <div className="pagination__pages">
        {pages.map((page, i) => (
          <button
            className={`btn ${
              currentPage === page ? `btn--active` : `btn--page`
            }`}
            key={i}
            onClick={() => paginationHandler(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="btn pagination__next"
        disabled={currentPage === totalPages}
        onClick={() => paginationHandler(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

function Pagination({ totalPage, currentPage, onPageChange }) {
  return (
    <>
      <div className="join mt-6">
        {currentPage > 1 && (
          <button
            className="btn btn-secondary"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}

        {Array.from({ length: totalPage }, (_, index) => (
          <input
            key={`page-${index + 1}`}
            title={`Page ${index + 1}`}
            className="join-item btn btn-square"
            type="radio"
            name="pagination"
            aria-label={`${index + 1}`}
            checked={currentPage === index + 1}
            onChange={() => onPageChange(index + 1)}
          />
        ))}
        {currentPage < totalPage && (
          <button
            className="btn btn-secondary"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Pagination;

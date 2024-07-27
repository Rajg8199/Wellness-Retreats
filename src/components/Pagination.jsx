import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center space-x-4 p-4">
      <button onClick={handlePrevPage} className="border p-2 rounded bg-blue-900 text-white">Previous</button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={handleNextPage} className="border p-2 rounded bg-blue-900 text-white">Next</button>
    </div>
  );
};

export default Pagination;

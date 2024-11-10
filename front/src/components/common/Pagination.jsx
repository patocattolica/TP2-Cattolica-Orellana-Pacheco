import React from 'react';
import '../../styles/common/pagination.css';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  pageSize = 5, 
  onPageChange, 
  onPageSizeChange 
}) => {
  if (!totalPages || totalPages < 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="page-size-selector">
        <span>Items por página: </span>
        <select 
          value={pageSize} 
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="page-size-select"
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
      
      <div className="page-buttons">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-button"
        >
          &lt;
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
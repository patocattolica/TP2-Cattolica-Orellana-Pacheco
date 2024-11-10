import React from 'react';
import '../../styles/student/student-search.css';

const StudentSearch = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por apellido..."
        value={value}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default StudentSearch;
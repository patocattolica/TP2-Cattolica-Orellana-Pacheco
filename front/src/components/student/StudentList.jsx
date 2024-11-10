import React from 'react';
import Table from '../common/Table';
import Pagination from '../common/Pagination';
import StudentSearch from './StudentSearch';
import '../../styles/student/student-list.css';

const StudentList = ({
  students = [],
  onDelete,
  onSearch,
  searchTerm = '',
  currentPage = 1,
  totalPages = 1,
  pageSize = 5,
  onPageChange,
  onPageSizeChange
}) => {
  const headers = ['Legajo', 'Nombre', 'Apellido'];

  return (
    <div className="student-list">
      <StudentSearch value={searchTerm} onChange={onSearch} />
      <Table 
        headers={headers}
        data={students}
        onDelete={onDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default StudentList;
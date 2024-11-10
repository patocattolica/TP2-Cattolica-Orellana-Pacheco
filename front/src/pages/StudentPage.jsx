import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import StudentList from '../components/student/StudentList';
import { fetchStudents, deleteStudent } from '../services/studentService';

const StudentPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStudents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetchStudents({
        search: searchTerm,
        currentPage,
        pageSize
      });
      
      console.log('API Response:', response);
      
      if (response) {
        setStudents(response.students || []);
        setTotalRecords(response.totalRecords || 0);
      }
    } catch (error) {
      console.error('Error loading students:', error);
      setError('Error al cargar los estudiantes');
      setStudents([]);
      setTotalRecords(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [currentPage, pageSize, searchTerm]);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      await loadStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      setError('Error al eliminar el estudiante');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const calculateTotalPages = () => {
    if (totalRecords === 0) return 1;
    return Math.ceil(totalRecords / pageSize);
  };

  return (
    <Layout
      title="Modulo Alumno"
      actionButton={
        <button className="button primary" onClick={() => navigate('/students/new')}>
          Agregar
        </button>
      }
    >
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <StudentList
          students={students}
          onDelete={handleDelete}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          currentPage={currentPage}
          totalPages={calculateTotalPages()}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize);
            setCurrentPage(1);
          }}
        />
      )}
    </Layout>
  );
};

export default StudentPage;
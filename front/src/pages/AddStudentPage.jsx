import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/common/Layout';

import StudentForm from '../components/student/StudentForm';


const AddStudentPage = () => {
  const navigate = useNavigate();
  return (
    <Layout

      title="Agregar Alumno"
      actionButton={
        
        <button 
          className="button secondary" 
          onClick={() => navigate('/students')}
        >
          Volver
        </button>
      }
    >
      <StudentForm />
    </Layout>
  );
};

export default AddStudentPage;

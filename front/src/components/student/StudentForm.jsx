import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validateDNI } from '../../utils/validators';
import { createStudent } from '../../services/studentService';
import '../../styles/student/student-form.css';

const StudentForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createStudent(data);
      navigate('/students');
    } catch (error) {
      if (error.response?.data?.field) {
        setError(error.response.data.field, {
          type: 'manual',
          message: error.response.data.message
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="student-form">
      <div className="form-group">
        <label htmlFor="firstname">Nombre:</label>
        <input
          id="firstname"
          {...register('firstname', {
            required: 'El nombre es requerido',
            maxLength: {
              value: 100,
              message: 'El nombre no puede exceder los 100 caracteres'
            }
          })}
        />
        {errors.firstname && (
          <span className="error-message">{errors.firstname.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Apellido:</label>
        <input
          id="lastname"
          {...register('lastname', {
            required: 'El apellido es requerido',
            maxLength: {
              value: 100,
              message: 'El apellido no puede exceder los 100 caracteres'
            }
          })}
        />
        {errors.lastname && (
          <span className="error-message">{errors.lastname.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="dni">DNI:</label>
        <input
          id="dni"
          {...register('dni', {
            required: 'El DNI es requerido',
            validate: validateDNI
          })}
        />
        {errors.dni && (
          <span className="error-message">{errors.dni.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'El email es requerido',
            validate: validateEmail,
            maxLength: {
              value: 100,
              message: 'El email no puede exceder los 100 caracteres'
            }
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      <div className="button-container">
        <button type="submit" className="button primary">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
import { API_BASE_URL } from '../utils/constants';

export const fetchStudents = async ({ search = '', currentPage = 1, pageSize = 5 }) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?search=${search}&currentPage=${currentPage}&pageSize=${pageSize}`
    );
    
    if (!response.ok) {
      throw new Error('Error fetching students');
    }
    
    const data = await response.json();
    
    return {
      students: data.rows || [], 
      totalRecords: data.count || 0 
    };
  } catch (error) {
    console.error('Error in fetchStudents:', error);
    return {
      students: [],
      totalRecords: 0
    };
  }
};

export const createStudent = async (studentData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw {
        response: {
          data: errorData
        }
      };
    }
    
    return response.json();
  } catch (error) {
    console.error('Error in createStudent:', error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Error deleting student');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error in deleteStudent:', error);
    throw error;
  }
};
import React from 'react';
import '../../styles/common/table.css';

const Table = ({ headers = [], data = [], onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id || Math.random()}>
              <td>{item.sid}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>
                <button 
                  onClick={() => onDelete(item.id)}
                  className="button delete"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length + 1} style={{ textAlign: 'center', padding: '1rem' }}>
              No hay datos disponibles
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
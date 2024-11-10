import React from 'react';
import Layout from '../components/common/Layout';
import Card from '../components/common/Card';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <Layout title="Pagina Principal">
      <div className="card-container">
        <Card title="Modulo Alumnos" to="/students" />
      </div>
    </Layout>
  );
};

export default Home;
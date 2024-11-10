import React from 'react';
import Sidebar from './Sidebar';
import '../../styles/common/layout.css';

const Layout = ({ children, title, actionButton }) => {
  return (
    <div className="sidebar-layout">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h2>{title}</h2>
          {actionButton}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
import React from 'react';

const ModernLoginPreview: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      border: 'none',
      margin: 0,
      padding: 0
    }}>
      <iframe
        src="/UnityCure/web/login_page.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0
        }}
        title="Modern Login Page"
      />
    </div>
  );
};

export default ModernLoginPreview;
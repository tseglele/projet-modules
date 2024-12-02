import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => {




  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="p-6 max-w-sm mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
    
      <LoginForm  />
    </div>
      </section>
  );
};

export default LoginSection;

import React, { useState } from 'react';
import { useLoginMutation } from '../api/authApi';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      localStorage.setItem('token', response.token); // Stocker le token
      alert('Connexion réussie !');
    } catch (err) {
      console.error('Erreur lors de la connexion :', err);
    }
  };

  // Vérification du type de l'erreur
  const errorMessage =
    error && 'data' in error
      ? (error.data as { message?: string }).message || 'Une erreur est survenue.'
      : 'Une erreur est survenue.';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      {isError && <p className="mt-2 text-sm text-red-500">Erreur : {errorMessage}</p>}
    </form>
  );
};

export default LoginForm;

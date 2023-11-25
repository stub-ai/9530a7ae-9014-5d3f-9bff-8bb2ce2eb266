import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2>Forum Topics</h2>
        {/* List forum topics here */}
        <Login />
      </main>
    </div>
  );
};

export default Home;
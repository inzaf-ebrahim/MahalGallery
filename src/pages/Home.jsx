import React from 'react';

const Home = () => {
  return (
    <section className="bg-white text-gray-800 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Mahal Gallery</h2>
        <p className="mb-8">Your one-stop solution for quality building materials.</p>
        <img src="https://via.placeholder.com/600x400" alt="Home" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Home;

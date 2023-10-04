import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button>
        <Link to="/registration">Register as Admin</Link>
      </button>
      <button>
        <Link to="/registration">Register as Borrower</Link>
      </button>
      <button>
        <Link to="/registration">Register as Lender</Link>
      </button>
    </div>
  );
}

export default HomePage;

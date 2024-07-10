import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the client bundle
import './index.css'; // Import the main CSS file
import App from './App'; // Import the main App component

// Create a root using ReactDOM.createRoot on the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component into the root
root.render(<App />);

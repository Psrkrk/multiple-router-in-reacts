import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Importing global CSS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx'; // Layout component
import Home from './components/Home/Home.jsx'; // Home component
import About from './components/About/About.jsx'; // About component
import Contact from './components/Contact/Contact.jsx'; // Contact component
import User from './components/User/User.jsx'; // User component
import Github from './components/Github/Github.jsx'; // Github component

// Create the router with unique paths for each component
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About /> // About component
      },
      {
        path: 'contact',
        element: <Contact /> // Contact component
      },
      {
        path: 'user/:userid', // Dynamic route for User
        element: <User /> // User component
      },
      {
        path: 'github', // Dynamic route for GitHub user profile
        element: <Github /> // Github component
      }
    ]
  }
]);

// Mount the React application to the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root using React 18

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

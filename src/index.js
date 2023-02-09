import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/index.css"
import { routeName } from './assets/data';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About,/*  Blog, */ Contact, ErrorPage, Home, Services, Works } from "./pages";



const {home, contact, about, services, works/* , blog */} = routeName;
const router = createBrowserRouter([
    {
      path: `/${home}`,
      errorElement: <ErrorPage />,
      element: <App />,
      children: [

        {
          index: true,
          element: <Home />
        },

        {
          path: about,
          element: <About />
        },

        {
          path: contact,
          element: <Contact />
        },

        {
          path: services,
          element: <Services />
        },

        {
          path: works,
          element: <Works />
        },

        // {
        //   path: blog,
        //   element: <Blog />
        // }

      ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    
      <RouterProvider router={router} />

  </React.StrictMode>
);


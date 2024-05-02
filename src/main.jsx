// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App";
import Home from "./components/Home";
// import Login from "./components/Login";
import Lesson from "./components/Lesson";
// import AddLesson from "./components/AddLesson";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/add",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/add",
  //       element: <AddLesson />,
  //     },
  //   ],
  // },
  // {
  //   path: "/login",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //   ],
  // },
  {
    path: "/lesson/:id",
    element: <App />,
    children: [
      {
        path: "/lesson/:id",
        element: <Lesson />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );
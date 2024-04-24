import React from 'react';
import App from './App';

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <Massege />
//   },
//   {
//     path: "/home",
//     element: <Home/>,
//   },
//   {
//     path: "/about",
//     element: <About/>,
//   },{
//     path: "/post",
//     element: <NewPost/>,
//   },{
//     path: "/post/:id",
//     element: <PostBage/>,
//   },
// ]);


// ReactDOM.render(
//   <React.StrictMode>
  
//   <RouterProvider router={router} />
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );


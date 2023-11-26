import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SinglePost from "../pages/SinglePost/SinglePost";
import Dashboard from "../Layout/Dashboard";
import Projects from "../pages/Dashboard/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/blog/:id',
          element: <SinglePost></SinglePost>,
          loader: ({params}) => fetch(`http://localhost:3000/blog/${params.id}`)
        },
        // {
        //   path: '/my-admin-dashboard',
        //   element: <Dashboard></Dashboard>
        // }
    ]
  },
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/projects",
        element: <Projects></Projects>
      }
    ]
  }
]);
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Error from "../Pages/Error/Error";
import Home from "./../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Jobs from "../Pages/Jobs/Jobs";
import Favourite from "../Pages/Favourite/Favourite";
import AppliedJobs from "../Pages/Applied Jobs/AppliedJobs";
import AddNewJob from "../Pages/New Job/AddNewJob";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Signin from "../Pages/Signin/Signin";
import JobDetails from "../Components/JobDetails/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
        loader: ({params}) =>  fetch(`http://localhost:9000/jobs/${params.id}`)
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/newjob",
        element: (
          <PrivateRoute>
            <AddNewJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

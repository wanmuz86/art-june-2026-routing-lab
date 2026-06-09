import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import NavigateProgrammatically from "./pages/NavigateProgrammatically";

import ProfileLayout from "./pages/profile/ProfileLayout";
import Settings from "./pages/profile/Settings";
import Details from "./pages/profile/Details";



// Create the route definition using the createBrowserRouter (v6++)
export const router = createBrowserRouter([
  {
    path: "/", // Everything that starts / will use <AppLayout/> as the Layout
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },  // If it is / -> Show Home component in Outlet
      { path: "about", element: <About /> }, // /about -> Show <About/> component.
    { path: "user/:userId", element: <User /> }, // It will have a parameters userId defined in the routes
       { path: "navigate", element: <NavigateProgrammatically /> },  
        // /profile/:userId + nested children
      {
        path: "profile/:userId",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <div>Select a tab (Settings or Details)</div> },
          { path: "settings", element: <Settings /> },
          { path: "details", element: <Details /> },
        ],
      },

    { path: "*", element: <NotFound/> // wildcard -> show <NotFound/>
 },
    ],
  },
]);

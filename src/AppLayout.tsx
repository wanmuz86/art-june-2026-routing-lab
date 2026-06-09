import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/profile/1">Profile User 1</NavLink></li>
          <li><NavLink to="/profile/2">Profile User 2</NavLink></li>
          
          <li><a href="/about">About</a></li>
           <li><NavLink to="/navigate">Navigate Porgrammatically</NavLink></li>
        </ul>
      </nav>
      
      {/* This will be replaced based on how we define in routes.tsx */}
      <Outlet /> 

      <footer>Copyright 2026 ; Wan Muzaffar</footer>
    </>
  );
}

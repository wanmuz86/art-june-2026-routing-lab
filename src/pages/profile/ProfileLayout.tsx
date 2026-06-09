import { NavLink, Outlet, useParams } from "react-router-dom";

export default function ProfileLayout() {
    // profile/1/settings [edit profile]
    //profile/1/details [view profile]

  const { userId } = useParams(); // string | undefined

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile for user with ID: {userId}</p>

      <ul>
        {/* Relative links because this component sits at /profile/:userId */}
        <li><NavLink to="settings">Settings</NavLink></li>
        <li><NavLink to="details">Details</NavLink></li>
      </ul>

      {/* Children render here */}
      <Outlet />
    </div>
  );
}
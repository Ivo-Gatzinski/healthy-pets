import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
//import "./LogoPetsLogout.css";

export default function LogoPetsLogout() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
      <div> 
      LOGO
      </div>
      <NavLink exact to="/" className="navbar-link">
      Home
      </NavLink>
      {isLoggedIn ? (
      <>
      <NavLink to="/vetpets" className="navbar-link">
      Pets
      </NavLink>
      <NavLink to="/addnote" className="navbar-link">
       Add Notes
      </NavLink>
       <button className="navbar-link" onClick={logout}>
        Logout
       </button>
      </>
        ) : (
      <>
      <NavLink to="/login" className="navbar-link">
      Login
      </NavLink>
      <NavLink to="/signup" className="navbar-link">
      Signup
      </NavLink>
      </>
      )}
      </nav>
  );
}


// test:



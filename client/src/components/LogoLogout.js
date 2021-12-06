import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import "./Navbar.css";

export default function LogoLogout() {
  
  const { logout } = useAuth();
 

  return (
    <nav className="navbar">
      <div> 
      LOGO
      </div>
      <div onClick={logout}> 
      Logout
      </div>
    </nav>
  );
}

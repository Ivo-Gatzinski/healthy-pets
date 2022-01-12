import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import "./Navbar.css";
import logo from "../pages/paw_logo_tang.png";

export default function LogoLogout() {
  
  const { logout } = useAuth();
 

  return (
    <nav className="navbar">
      <div> 
      <img src={logo} alt="paw logo"></img>
      </div>
      <div onClick={logout}> 
      Logout
      </div>
    </nav>
  );
}

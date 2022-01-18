import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../pages/paw_logo_tang.png";

export default function LogoHome() {
  
  return (
    <nav className="navbar">
      <div> 
      <img src={logo} alt="paw logo"></img>
      </div>
      <div> 
        {/* onClick direct to the landing page */}
      Home
      </div>
    </nav>
  );
}

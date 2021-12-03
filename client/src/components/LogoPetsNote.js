import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function LogoPetsNote() {
  
  return (
    <nav className="navbar">
      <div> 
      LOGO
      </div>
      <div> 
        {/* onClick direct to the landing page */}
      Pets
      </div>
      <div> 
      Add Note
      </div>
      <div> 
      Logout
      </div>
    </nav>
  );
}

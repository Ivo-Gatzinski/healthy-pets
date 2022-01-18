import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import banner from "../banner.png";
import logo from "../pages/paw_logo_tang.png";


export default function Landing() {
  
  return (
    <div className={styles.landing}>
      
      <img src={banner} alt="pets" className={styles.banner}></img>
      <div className={styles.header}>
      <img src={logo} alt="paw logo" className={styles.logo}></img>
      <h1 className={styles.h1}>Welcome to Healthy Pets!</h1>
      </div>
      
      <div className={styles.choose}><h2>
      <Link to="/vetlogin" className={styles.link}>Vet</Link>
     
      <Link to="/ownerlogin" className={styles.link}>Pet</Link>
      </h2>
    </div>
    
    </div>
  );
}

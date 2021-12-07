import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import banner from "../banner.png";

export default function Landing() {
  
  return (
    <div className={styles.landing}>
      <h1 className={styles.h1}>Welcome to Healthy Pets!</h1>
      <hr />
      <div>
      <img src={banner} alt="pets" className={styles.banner}></img></div>
      <h2> I am a ...</h2>
      <> ICON </> <> ICON </>
      <Link to="/vetlogin"> Veterinarian </Link>
      <Link to="/ownerlogin"> Pet Owner </Link>
    </div>
  );
}

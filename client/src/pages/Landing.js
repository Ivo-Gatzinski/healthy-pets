import { Link } from "react-router-dom";

export default function Landing() {
  
  return (
    <div>
      <h1>Welcome to Healthy Pets!</h1>
      <hr />
      <h2> I am a ...</h2>
      <> ICON </> <> ICON </>
      <Link to="/vetlogin"> Veterinarian </Link>
      <Link to="/ownerlogin"> Pet Owner </Link>
    </div>
  );
}

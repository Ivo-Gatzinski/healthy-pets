import { useAuth } from "../util/auth";
import { Redirect, Link } from "react-router-dom";


export default function OwnerHome() {
  const { isLoggedIn, user } = useAuth();
  if (!isLoggedIn) {
    return <Redirect to="/ownerlogin" />;
  }

  return (
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome {user.username}!</h1>
      <h2> My Pets: </h2>
      <div>
      Add Pet <Link to="addpet"> + </Link>
      </div>
      <div>
        Doggy McDogson Example <button> ✓ </button>
      </div>
    </div>
  );
}

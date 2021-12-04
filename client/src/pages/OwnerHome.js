import LogoLogout from "../components/LogoLogout";
import { useAuth } from "../util/auth";
import { Redirect, Link } from "react-router-dom";

export default function OwnerHome() {
  const { isLoggedIn, user } = useAuth();
  const pets = [{ name: "luna", _id: 1 }, { name: "Buddy", _id: 2 },{ name: "Doggy", _id: 3 }];
  // if (!isLoggedIn) {
  //   return <Redirect to="/ownerlogin" />;
  // }

  return (
    <div>
      <LogoLogout />
      {/* TODO: display logged in user's username */}
      {/* <h1>Welcome {user.username}!</h1> */}
      <h2> My Pets: </h2>
      <div>
        Add Pet <Link to="addpet"> + </Link>
      </div>
      <div>
        {pets.map(pet => (
          <div key={pet._id} className="card mb-3">
            {pet.name}
            <Link to="/notes"> ✓ </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

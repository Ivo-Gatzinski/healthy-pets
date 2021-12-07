import LogoLogout from "../components/LogoLogout";
import { useAuth } from "../util/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME } from "../util/queries";

export default function OwnerHome() {
  const { user } = useAuth();
  const { loading, data } = useQuery(ME);

  // checking if the data is null or return a emptry array
  let pets = data?.me.pets || [];

  return (
    <div>
      <LogoLogout />
      <h1>Welcome {user.username}!</h1>
      <h2> My Pets: </h2>
      <div>
        Add Pet <Link to="/addpet"> ➕ </Link>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          pets.map((pet) => (
            <div key={pet._id} className="card mb-3">
              {pet.firstName}
              <Link to={`/ownernotes/${pet._id}`}> ☑️ </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

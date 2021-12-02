import { useAuth } from "../util/auth";

export default function OwnerHome() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <h2> My Pets: </h2>
      <div>
      Add Pet <button> + </button>
      </div>
      <div>
        Doggy McDogson Example <button> ✓ </button>
      </div>
    </div>
  );
}

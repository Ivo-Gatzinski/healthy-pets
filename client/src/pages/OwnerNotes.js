import { useAuth } from "../util/auth";

export default function OwnerHome() {
  const { isLoggedIn, pets } = useAuth();
  return (
    <div>
      <h1>Notes for {isLoggedIn ? pets.name : "Doggy McDogson"}!</h1>
      <hr />
      <div className="card-container">
        <div>
            Subject
        </div>
        <div>
            Date
        </div>
        <div>
            Text
        </div>
      </div>
      <div className="card-container">
        <div>
            Subject
        </div>
        <div>
            Date
        </div>
        <div>
            Text
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";

export default function VetPets() {
  const pets = [
    { name: "Luna", _id: "abc" },
    { name: "Doggerston", _id: "zzz" },
    { name: "Snoopy", _id: "mmm" },
  ];
  const [petName, setPetName] = useState("");

  return (
    <div>
      <div>
        <h2>Search for pet name: </h2>
        <form>
          <div>
            <input
              autoFocus
              // disabled={loading}
              id="nameInput"
              type="text"
              placeholder="Enter username"
              name="nameInput"
              value={petName}
              onChange={(evt) => setPetName(evt.target.value)}
            />
          </div>
        </form>
      </div>
      <div>
        <h2>Select a pet: </h2>
        {pets ? (
          pets
            .filter((pet) =>
              pet.name.toLowerCase().includes(petName.toLowerCase())
            )
            .map((pet) => <div>{pet.name}</div>)
        ) : (
          <p>No pets.</p>
        )}
      </div>
    </div>
  );
}

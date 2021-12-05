import { useContext, useState } from "react";
import { Redirect, Link} from "react-router-dom";
import {token} from "../util/auth";
import LogoLogout from "../components/LogoLogout";
import { useQuery } from "@apollo/client";
import { ME } from "../util/queries";
import { ApolloProvider } from "@apollo/client";




export default function VetPets() {

const info = useQuery(ME);
  console.log(info);
  
  const pets = [
    { name: "Luna", _id: "abc" },
    { name: "Doggerston", _id: "zzz" },
    { name: "Snoopy", _id: "mmm" },
  ];
  const [petName, setPetName] = useState("");

  return (
    <div>
      <LogoLogout/>
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
            .map((pet) => <div key={pet._id}><Link to={`/vetnotes/${pet._id}`}>{pet.name}</Link></div>)
        ) : (
          <p>No pets.</p>
        )}
      </div>
    </div>
  );
}

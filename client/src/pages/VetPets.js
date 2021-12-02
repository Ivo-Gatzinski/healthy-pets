import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";

export default function VetPets() {
  return (
    <div>
      <div>
        <h2>Search for pet name: </h2>
        <form>
          <div>
            <input
              autoFocus
              // disabled={loading}
              id="username"
              type="text"
              placeholder="Enter username"
              name="username"
              value="input a pet's name"
              // onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div>
        <h2>Select a pet: </h2>
        <div> {/*onClick=clickable*/}
            Doggy McDogson 
        </div>
        <div>
            Luna Liu
        </div>
        <div>
            Leo Aguilar
        </div>
      </div>
    </div>
  );
}

import { useAuth } from "../util/auth";
import { useState } from "react";
import LogoPetsLogout from "../components/LogoPetsLogout";

  const initialFormState = {
    first: "",
    last:"",
    species:"",
    breed: "",
  };

export default function AddPets() {

  //   const { isLoggedIn, addPets, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // addPets(formState);
  };

  return (
    <div>
      <LogoPetsLogout/>
      <h1>Add a new pet:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petname">
            Pet Name
          </label>
          <input
            autoFocus
            id="petname"
            type="text"
            placeholder="Enter your pet's name"
            name="petname"
            value={formState.first.value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="ownerlastname">
            Owner Last Name
          </label>
          <input
            autoFocus
            // disabled={loading}
            id="ownerlastname"
            type="text"
            placeholder="Enter your last name"
            name="ownerlastname"
            value={formState.last.value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="species">
            Species
          </label>
          <input
            autoFocus
            // disabled={loading}
            id="species"
            type="text"
            placeholder="Enter your pet's species"
            name="species"
            value={formState.species.value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="breed">
            Breed
          </label>
          <input
            autoFocus
            // disabled={loading}
            id="breed"
            type="text"
            placeholder="Enter your pet's breed"
            name="petname"
            value={formState.breed.value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
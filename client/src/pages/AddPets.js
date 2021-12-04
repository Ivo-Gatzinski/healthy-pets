import { useAuth } from "../util/auth";
import { useState } from "react";
import LogoPetsLogout from "../components/LogoPetsLogout";

const styles = {
    formControl: {
      display: "flex",
      padding: "0.25em",
    },
    label: {
      flex: "0 1 6em",
      paddingRight: "0.25em",
    },
  };

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
        <div style={styles.formControl}>
          <label htmlFor="petname" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="ownerlastname" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="species" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="breed" style={styles.label}>
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
        <div style={styles.formControl}>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
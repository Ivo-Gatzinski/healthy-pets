// import { useAuth } from "../util/auth";
// import { useState } from "react";

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

//   const initialFormState = {
//     first: "",
//     last:"",
//     species:"",
//     breed: "",
//   };

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     addPets(formState);
//   };

export default function AddPets() {
//   const { isLoggedIn, addPets, loading, error } = useAuth();
//   const [formState, setFormState] = useState(initialFormState);
  return (
    <div>
      <h1>Add a new pet:</h1>
      <hr />
      <form>
        <div style={styles.formControl}>
          <label htmlFor="petname" style={styles.label}>
            Pet Name
          </label>
          <input
            autoFocus
            // disabled={loading}
            id="petname"
            type="text"
            placeholder="Enter your pet's name"
            name="petname"
            value="Your pet's name"
            // onChange={handleInputChange}
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
            value="Your last name"
            // onChange={handleInputChange}
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
            value="Your pet's species"
            // onChange={handleInputChange}
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
            value="Your pet's breed"
            // onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button type="submit">
            {/* {loading ? "Loading..." : "Submit"} */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
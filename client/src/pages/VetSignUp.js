import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Link } from "react-router-dom";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
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

//const initialFormState = {
//  username: "",
//  password: "",
//};

export default function VetSignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();


  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  //const handleInputChange = (evt) => {
    //const { name, value } = evt.target;
   // setFormState((prevState) => ({ ...prevState, [name]: value }));
  //};

  //const handleSubmit = async (evt) => {
  //  evt.preventDefault();
    //signup(formState);
  //};

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/vetpets" />;
  }
  return (
    <div>
      <div> HOME ICON placeholder</div>
      <h1>Sign Up</h1>
      <hr />
      <div> Vet ICON</div>
      <form onSubmit="test">
        <div style={styles.formControl}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            autoFocus
            disabled={loading}
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
           // value={formState.username.value}
            //onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="new-password" style={styles.label}>
            Password
          </label>
          <input
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            //value={formState.password.value}
           // onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
          <div>
          <p>Have an account already? <Link to="/vetlogin"> Log In  </Link> </p>
        </div>
        </div>
      </form>
    </div>
  );
}

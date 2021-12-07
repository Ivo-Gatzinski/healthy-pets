import { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useAuth } from "../util/auth";
import LogoHome from "../components/LogoHome";

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

const initialFormState = {
  username: "",
  password: "",
  role: "OWNER"
};

export default function OwnerSignUp() {
  const { isLoggedIn, signup, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/mypets" />;
  }
  return (
    <div>
      <LogoHome/>
      <h1> Sign Up</h1>
      <div> Pet Icon </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.formControl}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            autoFocus
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="new-password" style={styles.label}>
            Password
          </label>
          <input
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button type="submit">
            Submit
          </button>
        </div>
        <div>
          <p>Have an account already? <Link to="/ownerlogin" > Log In </Link></p>
        </div>
      </form>
    </div>
  );
}

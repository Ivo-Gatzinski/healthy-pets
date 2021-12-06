import { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import LogoHome from "../components/LogoHome";
import { useAuth } from "../util/auth";
// import { useQuery } from '@apollo/client';
// import { ME } from '../util/queries';


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
};

export default function OwnerLogin() {
  const { isLoggedIn, login, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  // const data = useQuery(ME);

  // console.log(data);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    return <Redirect to="/mypets" />;
  }

  return (
    <div>
      <LogoHome/>
      <h1>Login</h1>
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
            value={formState.username}
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
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button type="submit">
            Submit
          </button>
        </div>
        <div>
          <p>Don't have an account yet? <Link to="ownersignup"> Sign Up </Link></p>
        </div>
      </form>
    </div>
  );
}

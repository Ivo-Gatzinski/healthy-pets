import React from 'react';
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { useAuth } from "../util/auth";

const initialFormState = {
  subject: "",
  comments: "",
};

export default function AddNotes() {
  //const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
  
  };
  console.log(formState);
  return (
    <div>
      <div>
        <h2>Pet Name: "Display the selected pet's name"</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
            Subject
            </label>
            <input
              autoFocus
              id="subject"
              type="text"
              placeholder="Enter Subject.."
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
            Comments
            </label>
            <input
              autoFocus
              id="comments"
              type="text"
              placeholder="Enter Comments"
              name="comments"
              value={formState.comments}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div>
        <div >
          <button type="submit">
           Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}





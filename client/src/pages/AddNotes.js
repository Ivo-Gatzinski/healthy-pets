import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTE } from "../util/mutations";
import { useParams, useHistory } from "react-router-dom";
import { PET } from "../util/queries";

const initialFormState = {
  subject: "",
  text: "",
};

export default function AddNotes() {

const history = useHistory();
  const { petId } = useParams();
  const [addNote] = useMutation(ADD_NOTE);

  const [formState, setFormState] = useState(initialFormState);

  console.log(formState);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const note = { ...formState, petId };
      const { data } = await addNote({
        variables: { note },
      });
      history.push(`/vetnotes/${petId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <h2>Pet Name: "Display the selected pet's name"</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Subject</label>
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
            <label>Comments</label>
            <input
              autoFocus
              id="comments"
              type="text"
              placeholder="Enter Comments"
              name="text"
              value={formState.text}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

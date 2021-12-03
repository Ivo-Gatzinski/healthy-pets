import React from 'react';
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
//import { useMutation } from '@apollo/client';


export default function VetNotes() {
  const { isLoggedIn, user } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  return (
    <div>
        <h2>Notes for: "selected pet's name"</h2>
      <div>
        <div> {/* Expandable cards on click */}
            Note 1
        </div>
        <div>
            Note 2
        </div>
        <div>
            Note 3
        </div>
      </div>
    </div>
  );
}
///-- other code

const VetNotes = ({ notes = [] }) => {
  if (!notes.length) {
    return <h3>No Notes Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Notes
      </h3>
      <div className="flex-row my-4">
        {notes &&
          notes.map((note) => (
            <div key={note._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {note.commentAuthor} noted{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {note.createdAt}
                  </span>
                </h5>
                <p className="card-body">{note.Text}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};


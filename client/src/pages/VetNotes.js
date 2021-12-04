import React from 'react';
//import { useState  } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
//import { useMutation } from '@apollo/client';



export default function VetNotes() {
  //const { isLoggedIn } = useAuth();

  const pets = [{ name: "luna", id: 1 }, { name: "Buddy", id: 2 },{ name: "Doggy", id: 3 }];
  const notes = [
    { _id: 1, subject: "luna", date: "11/28", text: "blablabla" },
    { _id: 2, subject: "Buddy", date: "11/23", text: "blablabla"},
    { _id: 3, subject: "Doggy", date: "11/14", text: "blablabla"},
  ];
  // if (!isLoggedIn) {
    // redirect to home if user is logged in
    // return <Redirect to="/vetlogin" />;
  // }
  return (
    <div>
        <h2>Notes for: {pets[0].name}</h2>
      <div>
      <div>
        {notes.map(note => (
          <div key={note._id} className="card mb-3">
            {note.title}
            
          </div>
        ))}
      </div>
        <div> 
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

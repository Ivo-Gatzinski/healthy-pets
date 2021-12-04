import React from 'react';
import LogoPetsNote from '../components/LogoPetsNote';
//import { useState  } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
//import { useMutation } from '@apollo/client';



export default function VetNotes() {
  //const { isLoggedIn } = useAuth();

  const pets = [{ name: "luna", id: 1 }, { name: "Buddy", id: 2 },{ name: "Doggy", id: 3 }];
  const notes = [
    { _id: 1, subject: "luna", text: "blablabla" },
    { _id: 2, subject: "Buddy", text: "blablabla"},
    { _id: 3, subject: "Doggy", text: "blablabla"},
  ];
  // if (!isLoggedIn) {
    // redirect to home if user is logged in
    // return <Redirect to="/vetlogin" />;
  // }
  return (
    <div>
      <LogoPetsNote/>
        <h2>Notes for: {pets[0].name}</h2>
      <div>
      <div>
        {notes.map(note => (
          <div key={note._id} className="card mb-3">
            {note.text}
            
          </div>
        ))}
      </div>
        
      </div>
    </div>
  );
}
///-- other code

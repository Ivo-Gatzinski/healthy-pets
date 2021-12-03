import React from 'react';
//import { useState  } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
//import { useMutation } from '@apollo/client';


export default function VetNotes() {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/vetlogin" />;
  }
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

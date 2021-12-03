import React from 'react';
//import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { useAuth } from "../util/auth";

export default function AddNotes() {

  return (
    <div>
      <div>
        <h2>Pet Name: "Display the selected pet's name"</h2>
        <form>
          <div>
            <label>
            Subject
            </label>
            <input
              autoFocus
              // disabled={loading}
              id="username"
              type="text"
              placeholder="Enter username"
              name="username"
              value="input a pet's name"
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
            Comments
            </label>
            <input
              autoFocus
              // disabled={loading}
              id="username"
              type="text"
              placeholder="Enter username"
              name="username"
              value="input a pet's name"
              // onChange={handleInputChange}
            />
          </div>
        </form>
        <div>
          <button type="submit">
            {/* {loading ? "Loading..." : "Submit"} */}
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}

//another example to get code from: 



import React from 'react';
import { useState  } from "react";
import { useParams } from "react-router-dom";
//import { useAuth } from "../util/auth";
import { useQuery } from "@apollo/client";
import { ME } from "../util/queries";



export default function VetNotes() {
  //const { isLoggedIn } = useAuth();
  const { petId } = useParams();
  console.log(petId);

  //const info = useQuery(ME);

  
  const { loading, data } = useQuery(ME);
 //const allNotes = data?.notes || [];
//const note = data?.me.pets || [];
  //const note = info.data.me.pets[0].notes[0]
  const allNotes = [];
 // const pet = [{ name: "luna", _id: 1 }, { name: "Buddy", _id: 2 },{ name: "Doggy", _id: 3 }];
  //const notes = [
    //{ _id: 1, subject: "luna", text: "blablabla" },
  //  { _id: 2, subject: "Buddy", text: "blablabla"},
  //  { _id: 3, subject: "Doggy", text: "blablabla"},
 // ];
  //const [petName, setPetName] = useState("")

   //if (!isLoggedIn) {
    //redirect to home if user is logged in
     //return <Redirect to="/vetlogin" />;
   //}

  return (
    <div>
      
        <h2>Notes for: </h2>
      <div>
      <div>
        
      </div>
     <div>
     <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            allNotes.map(note => (
              <div key={note._id} className="card mb-3">
                <div>
                {note.subject}
               </div>
               <div>
                {note.text}
               </div>
    
    
              </div>
            ))
          )}
        </div>

     </div>
        
      </div>
    </div>
  );
}
///-- other code

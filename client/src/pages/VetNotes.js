import React from 'react';
import { useState  } from "react";
import { useParams } from "react-router-dom";
//import { useAuth } from "../util/auth";
import { useQuery } from "@apollo/client";
import { PET } from "../util/queries";



export default function VetNotes() {
  //const { isLoggedIn } = useAuth();
  const { petId } = useParams();
  console.log(petId);

  //const info = useQuery(ME);

  
  const  { data } = useQuery(PET, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { petId: petId  },
  });
  console.log(data);
  const notes = data?.pet.notes || [];
  console.log(notes);
  

  //const [petName, setPetName] = useState("")

  

  return (
    <div>
      
        <h2>Notes for: </h2>
      <div>
      <div>
        
      </div>
     <div>
     <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          { 
            notes.map(note => (
              <div key={note._id} className="card mb-3">
                <div>
                {note.subject}
               </div>
               <div>
                {note.text}
               </div>
    
    
              </div>
            ))
          }
        </div>

     </div>
        
      </div>
    </div>
  );
}


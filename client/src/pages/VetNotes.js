import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PET } from "../util/queries";

export default function VetNotes() {
  
  const { petId } = useParams();
  console.log(petId);

  

  const { data } = useQuery(PET, {
    fetchPolicy: "network-only",
    variables: { petId: petId },
  });
  console.log(data);
  const notes = data?.pet.notes || [];
  console.log(notes);

  

  return (
    <div>
      <h2>Notes for: </h2>
      <div>
        <div>
          <div className="col-12 col-md-8 mb-3">
            {/* If the data is still loading, render a loading message */}
            {notes.map((note) => (
              <div key={note._id} className="card mb-3">
                <div>{note.subject}</div>
                <div>{note.text}</div>
              </div>
            ))}
          </div>
        <div>
          <Link to={`/addnote/${petId}`}> Add a note </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

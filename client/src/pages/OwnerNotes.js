import LogoPetsLogout from "../components/LogoPetsLogout";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PET } from "../util/queries";

export default function OwnerNotes() {

  const { petId } = useParams();

  const  { data } = useQuery(PET, {
    variables: { petId: petId  },
  });

  console.log(data);
  const notes = data?.pet.notes || [];
  console.log(notes);
  const petName = data?.pet.firstName || "";

  return (
    <div>
      <LogoPetsLogout/>
      <h1>Notes for {petName}!</h1>
      <div className="card-container">
        <div>
          {notes.map((note) => (
            <div key={note._id} className="card mb-3">
              <div>{note.subject}</div>
              <div>{note.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

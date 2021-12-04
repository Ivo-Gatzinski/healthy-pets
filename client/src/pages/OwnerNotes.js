import { useAuth } from "../util/auth";
import LogoPetsLogout from "../components/LogoPetsLogout";

export default function OwnerNotes() {
  const pets = [
    { name: "luna", _id: 1 },
    { name: "Buddy", _id: 2 },
    { name: "Doggy", _id: 3 },
  ];
  const notes = [
    { _id: 1, subject: "Note1", date: "11/28", text: "blablabla" },
    { _id: 2, subject: "Note2", date: "11/23", text: "blablabla"},
    { _id: 3, subject: "Note3", date: "11/14", text: "blablabla"},
  ];
  const { isLoggedIn } = useAuth();
  // if (!isLoggedIn) {
  //   return <Redirect to="/ownerlogin" />;
  // }

  return (
    <div>
      <LogoPetsLogout/>
      <h1>Notes for {pets[0].name}!</h1>
      <div className="card-container">
        <div>
          {notes.map((note) => (
            <div key={note._id} className="card mb-3">
              <div>{note.subject}</div>
              <div>{note.date}</div>
              <div>{note.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

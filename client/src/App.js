import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./pages/Landing";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import AddNotes from "./pages/AddNotes";
import AddPets from  "./pages/AddPets";
import VetPets from "./pages/VetPets"
import VetLogin from "./pages/VetLogin";
import VetSignUp from "./pages/VetSignUp";
import VetNotes from "./pages/VetNotes"
import OwnerHome from "./pages/OwnerHome";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerSignUp from "./pages/OwnerSignUp";
import OwnerNotes from "./pages/OwnerNotes";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
       
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/login">
              <VetLogin />
            </Route>
            <Route path="/vetpets">
              <VetPets />
            </Route>
            <Route path="/notes">
              <VetNotes />
            </Route>
            <Route path="/signup">
              <VetSignUp />
            </Route>
            <Route path="/login">
              <OwnerLogin />
            </Route>
            <Route path="/notes">
              <OwnerNotes />
            </Route>
            <Route path="/mypets">
              <OwnerHome />
            </Route>
            <Route path="/signup">
              <OwnerSignUp />
            </Route>
            <Route path="/addnote">
              <AddNotes />
            </Route>
            <Route path="/addpet">
              <AddPets />
            </Route>
            {/* Use PrivateRoute for pages that should only be accessible to a
            user that has logged in.*/}
            <PrivateRoute path="/protected">
              <ProtectedPageExample />
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;

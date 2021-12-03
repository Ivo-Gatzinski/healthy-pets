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
            <Route path="/vetlogin">
              <VetLogin />
            </Route>
            <PrivateRoute path="/vetpets">
              <VetPets />
            </PrivateRoute>
            <PrivateRoute path="/notes">
              <VetNotes />
            </PrivateRoute>
            <Route path="/vetsignup">
              <VetSignUp />
            </Route>
            <Route path="/ownerlogin">
              <OwnerLogin />
            </Route>
            <PrivateRoute path="/notes">
              <OwnerNotes />
            </PrivateRoute>
            <PrivateRoute path="/mypets">
              <OwnerHome />
            </PrivateRoute>
            <Route path="/ownersignup">
              <OwnerSignUp />
            </Route>
            <PrivateRoute path="/addnote">
              <AddNotes />
            </PrivateRoute>
            <PrivateRoute path="/addpet">
              <AddPets />
            </PrivateRoute>
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

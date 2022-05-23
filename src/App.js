import { useUserContext } from "./context/userContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";


function App() {  
  const { user, loading, error } = useUserContext();

  return (
   <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/chat" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
   </BrowserRouter>
  )
}

export default App;
import React, { useContext } from 'react'
import { useUserContext } from "../context/userContext";
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useUserContext();

    return (
        <Route
        {...rest}
        exact
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
}


export default PrivateRoute;
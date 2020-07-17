import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;

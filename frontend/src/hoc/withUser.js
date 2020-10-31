import React from "react";
import { Redirect } from "react-router";
import UserContext from "root/context/UserContext";

const withLoggedInUser = (Component) => {
  const WrappedComponent = ({ props }) => (
    <UserContext.Consumer>
      {(data) =>
        data.userData.user ? (
          data.userData.user.id ? (
            <>
            <Component userData={data.userData} {...props} />
            </>
          ) : (
            <Redirect to="/404" />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    </UserContext.Consumer>
  );
  return WrappedComponent;
};

export default withLoggedInUser;

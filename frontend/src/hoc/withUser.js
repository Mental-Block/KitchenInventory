import React from "react";
import { Redirect } from "react-router";

import UserContext from "root/context/UserContext";
import UserSideBar from "root/layout/UserSideBar"

const withLoggedInUser = (Component) => {
  const WrappedComponent = ({ props }) => (
    <UserContext.Consumer>
      {(data) =>
        data.userData.user ? (
          data.userData.user.id ? (
            <>
              <UserSideBar userData={data.userData} />
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

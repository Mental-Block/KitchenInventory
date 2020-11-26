import withLoggedInUser from "root/hoc/withUser";

import * as Private from "../pages/private";
import * as Public from "../pages/public";

export const PUBLIC = [
  { value: "Home", path: "/", component: Public.Home },
  { value: "Contact", path: "/contact", component: Public.Contact },
  { value: "Login",  path: "/login", component: Public.Login },
  { value: "Register", path: "/register", component: Public.Register },
];

export const PRIVATE = [
  { value: "Home", path: "/user/:id", component: withLoggedInUser(Private.Home) },
  { value: "DashBoard", path: "/user/:id/dashboard", component: withLoggedInUser(Private.DashBoard) },
  { value: "Settings", path: "/user/:id/settings", component: withLoggedInUser(Private.Settings) },
];

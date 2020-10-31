import withLoggedInUser from "root/hoc/withUser";
import * as Private from "root/pages/private";

const PRIVATE = [
  { path: "/user/:id", component: withLoggedInUser(Private.Home) },
  { path: "/user/:id/additems", component: withLoggedInUser(Private.AddItems) },
  { path: "/user/:id/viewcategories", component: withLoggedInUser(Private.ViewCategories) },
  { path: "/user/:id/viewall", component: withLoggedInUser(Private.ViewAll) },
  { path: "/user/:id/settings", component: withLoggedInUser(Private.Settings) },
];

export default PRIVATE;

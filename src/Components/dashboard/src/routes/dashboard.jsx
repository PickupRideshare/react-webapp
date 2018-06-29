import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "pe-7s-home",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Find A Ride",
    icon: "pe-7s-car",
    component: TableList
  },
  {
    path: "/typography",
    name: "Post A Ride",
    icon: "pe-7s-speaker",
    component: Typography
  },
  { path: "/icons", name: "Rewards", icon: "pe-7s-star", component: Icons },
  { path: "/maps", name: "Payments", icon: "pe-7s-cash", component: Maps },
 
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;

import "./styles.css";
import {
  HOME_SVG,
  EXPLORE_SVG,
  NOTIFICATIONS_SVG,
  MESSAGES_SVG,
  BOOKMARKS_SVG,
} from "./Images/";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  const menu = [
    {
      icon: HOME_SVG,
      name: "Home",
    },
    {
      icon: EXPLORE_SVG,
      name: "Explore",
    },
    {
      icon: NOTIFICATIONS_SVG,
      name: "Notifications",
    },
    {
      icon: MESSAGES_SVG,
      name: "Messages",
    },
    {
      icon: BOOKMARKS_SVG,
      name: "Bookmarks",
    },
  ];

  return (
    <div className="sidebar mt-3 mx-5">
      <img
        src={require("./Images/Twitter-logo.png")}
        alt="twitter-logo"
        className="logo-icon  mb-2"
      />
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
}

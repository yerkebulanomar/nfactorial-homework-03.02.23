import "./styles.css";
import { HOME_SVG } from "./Images/";
import { EXPLORE_SVG } from "./Images/";
import { NOTIFICATIONS_SVG } from "./Images/";
import { MESSAGES_SVG } from "./Images/";
import { BOOKMARKS_SVG } from "./Images/";

export default function SideMenu() {
  const menu = [
    {
      icon: { HOME_SVG },
      name: "Home",
    },
    {
      icon: { EXPLORE_SVG },
      name: "Explore",
    },
    {
      icon: { NOTIFICATIONS_SVG },
      name: "Notifications",
    },
    {
      icon: { MESSAGES_SVG },
      name: "Messages",
    },
    {
      icon: { BOOKMARKS_SVG },
      name: "Bookmarks",
    },
  ];

  return (
    <div className="w-25 mt-3 mx-5">
      <img
        src={require("./Images/Twitter-logo.png")}
        alt="twitter-logo"
        className="logo-icon"
      />

      {menu.map((item) => (
        <div className="d-flex">
          <div className="menu-icon">{item.icon}</div>
          <p className="menu-text mx-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

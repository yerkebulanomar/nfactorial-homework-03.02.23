import { useState } from "react";
import "./App.css";
import Home from "./Components/HomeComponent";
import SearchMenu from "./Components/SearchMenuComponent";
import SideMenu from "./Components/SideMenuComponent";

function App() {
  const [receivedData, setReceivedData] = useState("");
  const handleData = (searchContent) => {
    setReceivedData(searchContent);
    console.log(searchContent);
  };
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <Home substring={receivedData} />
      <div className="vertical-divider"></div>
      <SearchMenu handleData={handleData} />
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./Components/HomeComponent";
import SideMenu from "./Components/SideMenuComponent";

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className="vertical-divider"></div>
      <Home />
      <div className="vertical-divider"></div>
    </div>
  );
}

export default App;

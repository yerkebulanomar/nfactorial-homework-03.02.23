import "./App.css";
import Home from "./Components/HomeComponent";
import SearchMenu from "./Components/SearchMenuComponent";
import SideMenu from "./Components/SideMenuComponent";

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <Home />
      <div className="vertical-divider"></div>
      {/* <SearchMenu /> */}
    </div>
  );
}

export default App;

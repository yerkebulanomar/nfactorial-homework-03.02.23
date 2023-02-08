import "./styles.css";
import React from "react";

class SearchMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  onChangeSearchInput = (e) => {
    // console.log(e);
    this.setState({
      content: e.target.value,
    });
  };

  //   sendDataToParent = () => {
  //     this.props.onChangeSearchInput;
  //   };

  render() {
    return (
      <div>
        <input
          className="search-input mt-3 mx-3"
          onChange={this.onChangeSearchInput}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchMenu;

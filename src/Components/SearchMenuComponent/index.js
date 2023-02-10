import "./styles.css";
import React from "react";

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: "",
    };
  }

  onChangeSearchInput = (e) => {
    // console.log(e);
    this.setState(
      {
        searchContent: e.target.value,
      },
      () => {
        this.props.handleData(this.state.searchContent);
        console.log(this.state.searchContent);
      }
    );
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
          placeholder="Search Twitter"
          value={this.state.searchContent}
        />
      </div>
    );
  }
}

export default SearchMenu;

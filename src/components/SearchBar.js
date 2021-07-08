import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.value);
  };

  render() {
    return (
      <div className="search-wrapper">
        <form onSubmit={this.onFormSubmit}>
          <label>Video Search</label>
          <input
            value={this.state.value}
            type="text"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;

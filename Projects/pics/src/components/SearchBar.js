import React, { Component } from 'react';

export default class SearchBar extends Component {
  // Controlled components: One source of truth. Keeps input value and JS data in sync.
  state = { term: '' };

  // Community naming convention: 'on' + name of the element + event that we're watching
  onFormSubmit = (event) => {
    event.preventDefault();

    // Calls the callback function that was passed down from parent using the onSubmit prop and passes the term var as an argument
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search images..."
            />
          </div>
        </form>
      </div>
    );
  }
}

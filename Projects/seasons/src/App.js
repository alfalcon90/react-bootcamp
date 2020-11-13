import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component {
  // First function that gets called when an instance of a class is called.
  constructor(props) {
    // Reference to parent's constructor function. REQUIRED.
    super(props);

    // This is the only time that we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message }),
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader text="Waiting for location request..." />;
  }

  // React requires render() to be defined. Gets called often.
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;

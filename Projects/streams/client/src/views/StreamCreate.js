import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from '../components/StreamForm';

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

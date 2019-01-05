import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: 'ho'
  };
  render() {
    return (
      <div>
        저의 이름은 <b>{this.props.name}</b>
      </div>
    );
  }
}

export default MyName;

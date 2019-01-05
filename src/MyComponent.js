import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };
  // props 로 받아온 값을 state 로 동기화하는 함수//
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }
  //업데이트를 방지하는 함수//
  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.value === 10) return false;
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevState.value) {
      console.log('value 값이 바뀌었다!', this.props.value);
    }
  }
  componentWillUpdate() {
    console.log('Good Bye');
  }

  render() {
    return (
      <div>
        {this.props.missing.something}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}
export default MyComponent;

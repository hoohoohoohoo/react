import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    number1: 0,
    number2: 0
  };

  increase = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  increase1 = () => {
    this.setState({
      number1: this.state.number1 + 1
    });
  };

  decrease1 = () => {
    this.setState({
      number1: this.state.number1 - 1
    });
  };

  sum = () => {
    this.setState({
      number2: this.state.number + this.state.umber1
    });
  };

  min = () => {
    this.setState({
      number2: this.state.number2
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>값 {this.state.number}</div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <div>값</div> {this.state.number1}
        <button onClick={this.increase1}>+</button>
        <button onClick={this.decrease1}>-</button>
        <div>
          값 {(this.state.number2 = this.state.number * this.state.number1)}
        </div>
        <div>
          나눔:{' '}
          {this.state.number > this.state.number1
            ? this.state.number / this.state.number1
            : this.state.number1 / this.state.number}
        </div>
      </div>
    );
  }
}
export default Counter;

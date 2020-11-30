import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  onClickMinus = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        <p>You clicked {count} times</p>
        <button onClick={this.onClickMinus}>-</button>
        <button onClick={this.onClickPlus}>+</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  HandleOnClick = (i) => {
    const { count } = this.state;
    this.setState({
      count: count + i,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        <p>You clicked {count} times</p>
        <button onClick={(i) => this.HandleOnClick(-1)}>-</button>
        <button onClick={(i) => this.HandleOnClick(1)}>+</button>
      </div>
    );
  }
}

export default Counter;

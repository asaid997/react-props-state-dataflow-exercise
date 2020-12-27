import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
              {this.props.reservations.map(r => (<div>{r.day}@{r.time}</div>))}
    </div>)
  }
}

export default Register
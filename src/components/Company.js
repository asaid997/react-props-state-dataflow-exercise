import React, { Component } from 'react';
import SubCompany from './SubCompany'

class Company extends Component {
  render() {
    let explodedRevenue = this.props.revenue * 100

    return (
      <div>
        <SubCompany name={this.props.name} key={this.props.name}/>
      </div>
    )
  }
}

export default Company
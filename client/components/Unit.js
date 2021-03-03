import React, { Component } from 'react';

class Unit extends Component {

  render() {
    console.log('this.props', this.props);
    return(
      <div className="singleUnit">
        <h6>inside unit testing</h6>
        {this.props.text}
      </div>
    )
  }
}

export default Unit;

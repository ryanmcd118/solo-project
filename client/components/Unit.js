import React, { Component } from 'react';

class Unit extends Component {

  render() {
    // console.log('this.props', this.props);
    return(
      <div className="singleUnit">
        <h3>Unit Name</h3>
        {this.props.text}
        <div className="unitButtons">
          <button 
            className="innerButton"
            onClick={(event) => this.props.updateUnit(event, this.props.index)}
            >Update unit info
          </button>

          <button 
            className="innerButton"
            onClick={(event) => this.props.addResources(event, this.props.index)}
            >Add resources
          </button>

          <button 
            className="innerButton"
            onClick={(event) => this.props.deleteUnit(event, this.props.index)}
            >Delete unit
          </button>
        </div>
      </div>
    )
  }
}

export default Unit;

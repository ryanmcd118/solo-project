import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import UpdateUnit from './UpdateUnit';

class Unit extends Component {

  render() {
    // console.log('UNIT this.props', this.props);
    return(
      <div className="singleUnit">
        <div className="unitHeaders">
          <h4>{this.props.unitDay}</h4>
          <h4>{this.props.topic}</h4>
        </div>
        <p className="unitDescription">{this.props.description}</p>
        <div className="unitButtons">
        <button 
            className="innerButton"
            onClick={(event) => {
              // window.location.href='/api/updateUnit';
              this.props.updateUnit(event);
            }}
            >Update unit info
          </button>
          {/* <button 
            className="innerButton"
            onClick={(event) => this.props.updateUnit(event)}
            >Update unit info
          </button> */}

          <button 
            className="innerButton"
            onClick={(event) => this.props.addResources(event)}
            >Add resources
          </button>

          <button 
            className="innerButton"
            onClick={(event) => this.props.deleteUnit(event)}
            >Delete unit
          </button>
        </div>
      </div>
    )
  }
}

export default Unit;

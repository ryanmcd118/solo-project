import React, { Component } from 'react';
import CalendarContainer from './CalendarContainer';

class MainContainer extends Component {
  render() {
    return(
      <div>
        <div className="outerContainer">
          <h1>Codesmith Immersive Schedule</h1>
          {/* <h2>Junior Portion Technical Topics</h2> */}
        </div>

        <div className="addUnit">
          <h3>Add a new unit</h3>
          {/* <form className="userCreator" onSubmit={(e) => this.props.handleSubmit}> */}
          <form className="userCreator" onChange={(event) => {
              // console.log('onchange is triggered', event.target.value);
              // console.log('event id', event.target.id)
              console.log('onChange invoked')
              this.props.onChange(event)
            }}>
            <div className="unitDay">
              <label htmlFor="unitDay" className="boxLabels">Enter unit day: </label>
              <input id="unitDay" name="unitDay" type="text" />
            </div>

            <div className="topic">
              <label htmlFor="topic" className="boxLabels">Enter topic: </label>
              <input id="topic" name="topic" type="text" />
            </div>

            <div className="description">
              <label htmlFor="description" className="boxLabels">Enter description: </label>
              <textarea id="description" name="description" rows={5} />
              {/* <input id="description" name="description" type="text" /> */}
            </div>

            <button
              className="btn"
              onClick={(event) => this.props.handleSubmit(event)}
              >Add a unit
            </button>
          </form>
        </div>

        <CalendarContainer 
          units={this.props.units} 
          onChange={this.props.onChange}
          updateUnit={this.props.updateUnit} 
          addResources={this.props.addResources} 
          deleteUnit={this.props.deleteUnit}
        />
      </div>   
    )
  }
}

export default MainContainer;

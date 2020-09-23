import React from "react";
import { NavLink } from 'react-router-dom'

// Needs to know that a click happened so it can re-write itself 

class DogCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("clicking")
    this.setState((previousState) => ({ clicked: !previousState.clicked }), () => console.log("State: ", this.state))
  }

  render() {
    console.log(this.state)
    return (
      <div className="card">
        <NavLink to={`/dogs/${this.props.dog.id}`}>
          <span className="content">
            <h2 >{this.props.dog.name}</h2>
            <img alt="" src={this.props.dog.img} />
          </span>
        </NavLink>
        <button onClick={this.clickHandler}>Bark</button>
        {this.state.clicked ? <span className="bark">
          <h2>Bark</h2>
        </span> : null}
      </div>
    );
  }
}


export default DogCard;

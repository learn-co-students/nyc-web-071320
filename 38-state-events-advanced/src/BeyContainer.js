import React from "react";
import BeyCard from './BeyCard'
import api from './api.js'

class BeyContainer extends React.Component {

  state = {
    beyArray: api
  }


  beys = () => {
    return this.state.beyArray.map(el => <BeyCard key={el.id} clickHandler={this.props.clickHandler} bey={el} />)
    // return a new array 
    // array will be a list of components
  }
  render() {

    return (
      <div className="index">
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;

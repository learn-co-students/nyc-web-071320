import React from "react";
import BeyCard from './BeyCard'
class BeyContainer extends React.Component {

  beys = () => {
    return this.props.beyArray.map(el => <BeyCard key={el.id} clickHandler={this.props.clickHandler} bey={el} />)
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

import React, { Component } from "react";
import BeyCard from './BeyCard'
export default class Favorites extends Component {

  renderBeys = () => {
    return this.props.beys.map(el => <BeyCard key={el.id} bey={el} />)
  }
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

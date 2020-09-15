import React, { Component } from "react";
import { apiResponse } from '../api.js'
import DogCard from "../Components/DogCard.js";
class DogList extends Component {

  dogs = () => {
    return apiResponse.map(ele => <DogCard key={ele.id} dog={ele} />)
  }

  render() {
    console.log("API: ", apiResponse)
    return <div className="list">{this.dogs()}</div>;
  }
}

export default DogList;

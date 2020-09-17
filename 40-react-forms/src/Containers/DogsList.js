import React, { Component } from "react";
import { apiResponse } from '../api.js'
import DogCard from "../Components/DogCard.js";
import Create from "../Components/Create"
import Search from "../Components/Search.js";

class DogList extends Component {

  state = {
    dogArray: apiResponse,
    searchTerm: ""
  }

  dogs = () => {
    let filteredArray = this.state.dogArray.filter(el => el.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredArray.map(ele => <DogCard key={ele.id} dog={ele} />)
  }

  submitHandler = (dogObj) => {
    console.log("submitting", dogObj)
    this.setState((previousState) => ({
      dogArray: [dogObj, ...previousState.dogArray]
    }))
  }

  changeHandler = (e) => {
    e.persist()
    // change the value in state
    this.setState(() => ({
      searchTerm: e.target.value
    }))
  }

  render() {
    console.log("API: ", this.state)
    return (
      <>
        <Create submitHandler={this.submitHandler} />
        <Search value={this.state.searchTerm} changeHandler={this.changeHandler} />
        <div className="list">{this.dogs()}</div>
      </>
    );
  }
}

export default DogList;

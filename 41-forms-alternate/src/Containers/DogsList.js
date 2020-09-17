import React, { Component } from "react";
import { apiResponse } from '../api.js'
import DogCard from "../Components/DogCard.js";
import Create from "../Components/Create"
import Search from "../Components/Search.js";

class DogList extends Component {

  state = {
    dogArray: apiResponse,
    searchTerm: "",
    filterType: ""
  }

  dogs = () => {
    if (this.state.filterType === "name") {
      let filteredArray = this.state.dogArray.filter(el => el.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return filteredArray.map(ele => <DogCard key={ele.id} dog={ele} />)

    } else {
      let filteredArray = this.state.dogArray.filter(el => el.breed.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return filteredArray.map(ele => <DogCard key={ele.id} dog={ele} />)
    }
  }

  submitHandler = (dogObj) => {
    console.log("submitting", dogObj)
    this.setState((previousState) => ({
      dogArray: [dogObj, ...previousState.dogArray]
    }))
  }

  searchSubmitHandler = (info) => {
    console.log("submitting", info)
    this.setState({
      searchTerm: info.searchTerm,
      filterType: info.filterType
    })
  }



  render() {
    console.log("DogsList State: ", this.state)
    return (
      <>
        <Create submitHandler={this.submitHandler} />
        <Search value={this.state.searchTerm} submitHandler={this.searchSubmitHandler} />
        <div className="list">{this.dogs()}</div>
      </>
    );
  }
}

export default DogList;

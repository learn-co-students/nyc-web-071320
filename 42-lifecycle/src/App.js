import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Create from "./Create";
import Favorites from './Favorites'


class App extends React.Component {

  state = {
    beyArray: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/beyArray")
      .then(resp => resp.json())
      .then(data => this.setState({ beyArray: data }))
  }

  filteredBeys = () => {
    return this.state.beyArray.filter(el => el.favorite)
  }

  createHandler = (obj) => {

    //optimistically 
    // this.setState({ beyArray: [obj, ...this.state.beyArray] })

    //pessimistically
    fetch("http://localhost:4000/beyArray", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(newObj => this.setState({ beyArray: [...this.state.beyArray, newObj] }))
  }

  addToFavoritesHandler = (id) => {
    fetch(`http://localhost:4000/beyArray/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ favorite: true })
    })
      .then(resp => resp.json())
      .then(newObj => {
        console.log("fetch")
        let newArray = [...this.state.beyArray]
        let foundObj = newArray.find(el => el.id === parseInt(newObj.id))
        foundObj.favorite = true
        foundObj.num_of_clicks = foundObj.num_of_clicks + 1

        // find the index of the old object in the state array 
        // change the object at that index to the new object that was returned by the request
        this.setState({ beyArray: newArray })
      })

  }

  render() {
    console.log("State In App:", this.state)
    return (
      <div className="container">
        <Create submitHandler={this.createHandler} />
        <BeyContainer beys={this.state.beyArray} clickHandler={this.addToFavoritesHandler} />
        <Favorites beys={this.filteredBeys()} />
      </div>
    );
  }
};

export default App;

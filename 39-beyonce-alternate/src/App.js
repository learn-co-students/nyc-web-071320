import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends React.Component {

  state = {
    favoritesArray: []
  }

  addToFavHandler = (beyObj) => {
    console.log("clicking: ", beyObj)
    if (this.state.favoritesArray.includes(beyObj)) {

    } else {
      this.setState(() => ({
        favoritesArray: [beyObj, ...this.state.favoritesArray]
      }))
    }
  }
  removeFavHandler = (beyObj) => {
    let newArray = [...this.state.favoritesArray].filter(ele => ele != beyObj)
    this.setState(() => ({
      favoritesArray: newArray
    }))
    window.alert("Hot Sauce...swag")
  }

  render() {
    console.log("state: ", this.state)
    return (
      <div className="container">
        <BeyContainer beyArray={this.state.beyArray} clickHandler={this.addToFavHandler} />
        <Favorites beyArray={this.state.favoritesArray} clickHandler={this.removeFavHandler} />
      </div>
    );
  }
};

export default App;

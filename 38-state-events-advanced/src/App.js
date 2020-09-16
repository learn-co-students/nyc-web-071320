import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import api from './api.js'

class App extends React.Component {

  state = {
    beyArray: api
  }

  addToFavHandler = (id) => {
    console.log("clicking: ", id)
    // iterate through state and find the object with this id 
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find(el => el.id === id)
    // change the favorites key of that object to true
    foundObj.favorite = !foundObj.favorite
    // trigger a re-render 
    this.setState(() => ({
      beyArray: newArray
    }))
  }
  removeFavHandler = (id) => {
    // iterate through state and find the object with this id 
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find(el => el.id === id)
    // change the favorites key of that object to true
    foundObj.favorite = false
    // trigger a re-render 
    this.setState(() => ({
      beyArray: newArray
    }))
    window.alert("Hot Sauce...swag")
  }


  allFavorites = () => {
    return this.state.beyArray.filter(el => el.favorite)
  }

  render() {
    console.log("state: ", this.state)
    return (
      <div className="container">
        <BeyContainer beyArray={this.state.beyArray} clickHandler={this.addToFavHandler} />
        <Favorites beyArray={this.allFavorites()} clickHandler={this.removeFavHandler} />
      </div>
    );
  }
};

export default App;

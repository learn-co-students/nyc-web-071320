import React, { Component } from "react";
import { apiResponse } from '../api.js'
import { Switch, Route } from 'react-router-dom'
import DogCard from "../Components/DogCard.js";


class DogList extends Component {

  state = {
    dogsArray: apiResponse
  }

  dogs = () => {
    return apiResponse.map(ele => <DogCard key={ele.id} dog={ele} />)
  }

  render() {
    console.log("API: ", apiResponse)
    return (
      <div className="list">
        <Switch>
          {/* grab the id from the path, find the dog with that id, render only that dog's component */}
          <Route path="/dogs/:id" render={(routerProps) => {
            console.log("router Props: ", routerProps)
            let id = parseInt(routerProps.match.params.id)
            let foundDog = this.state.dogsArray.find((el) => el.id === id)
            return <DogCard dog={foundDog} />
          }} />
          <Route path="/dogs" render={() => this.dogs()} />
        </Switch>
      </div>);
  }
}

// switch (path) {
//   case "/dogs":
//       //print all dogs
//     break;
//     case "/dogs/:id":
//       // print a single dog

//   default:
//     break;
// }










export default DogList;

import React from "react";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from "../people-page/people-page";

import "./app.css";

class App extends React.Component {
  state = {
    itemSelected: 1,
    showRandomPlanet: true,
    hasError: false
  };
  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };
  onItemSelected = id => {
    this.setState({
      itemSelected: id
    });
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if(this.state.hasError){
     return <ErrorIndicator />  
    }  
    return (
      <div>
        <Header />
        {this.state.showRandomPlanet ? (
          <RandomPlanet toggleRandomPlanet={this.toggleRandomPlanet} />
        ) : null}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
       <PeoplePage/>
       <div className="row mb2 PeoplePage " >
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
      </div>
    );
  }
}

export default App;

import React from "react";

import Header from "../header";

import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";

import "./app.css";
import ErrorBoundary from "../error-boundry/error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components/item-list";
import {
  PlanetDetails,
  PersonDetails,
  StarshipDetails
} from "../sw-components/detalis";

class App extends React.Component {
  swapiService = new SwapiService();
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
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
    //     <Record field={"gender"} label={"Gender"} />
    //     <Record field={"eyeColor"} label={"Eye color"} />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={11}
    //     getData={getStarship}
    //     getImageUrl={getStarshipImage}
    //   >
    //     <Record field={"model"} label={"Model"} />
    //     <Record field={"length"} label={"Length"} />
    //     <Record field={"costInCredits"} label={"Cost"} />
    //   </ItemDetails>
    // );
    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={1} />
          <PlanetDetails itemId={4} />
          <StarshipDetails itemId={9} />
          <PersonList />
          <PlanetList />
          <StarshipList />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

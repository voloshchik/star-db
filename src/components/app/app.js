import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ErrorBoundary from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components/item-list";
import PersonDetails from "../sw-components/person-detalis";
import PlanetDetails from "../sw-components/planet-detalis";
import StarshipDetails from "../sw-components/starship-detalis";
import { SwapiServiceProvider } from "../swapi-sevice-context/swapi-sevice-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";

import "./app.css";

class App extends React.Component {
  state = {
    itemSelected: 1,
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("switched to", Service.name);
      return {
        swapiService: new Service()
      };
    });
    console.log("jjjjjj");
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

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Row left={<PersonList />} right={<PersonDetails itemId={1} />} />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={4} />} />
            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={9} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;

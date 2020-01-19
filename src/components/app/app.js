import React from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import "./app.css";
import ErrorBoundary from "../error-boundry/error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components/item-list";

import { SwapiServiceProvider } from "../swapi-sevice-context/swapi-sevice-context";
import PersonDetails from "../sw-components/person-detalis";
import PlanetDetails from "../sw-components/planet-detalis";
import StarshipDetails from "../sw-components/starship-detalis";

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

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <PersonDetails itemId={1} />
            <PlanetDetails itemId={4} />
            <StarshipDetails itemId={9} />
            <PersonList />
            <PlanetList />
            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;

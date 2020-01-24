import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { StarshipDetails } from "../sw-components";
import ErrorBoundary from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../pages/people-page";
import { PlanetPage } from "../pages/planet-page";
import  StarshipPage  from "../pages/starship-paget";
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
          <BrowserRouter>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route path="/" exact render={() => <h2>Welcom to Star DB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({match}) => {
                  const {id}=match.params
                  console.log(id)
                  return <StarshipDetails itemId={id} />;
                }}
              />
              {/* <PeoplePage />
              <PlanetPage />
              <StarshipPage /> */}
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;

import React from "react";

import { withData } from "../hoc-helpers";
import ItemList from "../item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const withChildrenFunction = fn => Wrapper => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name}({model})
  </span>
);
const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildrenFunction(renderName)(ItemList))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildrenFunction(renderName)(ItemList))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildrenFunction(renderModelAndName)(ItemList))
);

export { PersonList, PlanetList, StarshipList };

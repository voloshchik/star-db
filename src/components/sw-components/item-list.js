import React from "react";

import { withData } from "../hoc-helpers";
import ItemList from "../item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import compose from "../hoc-helpers/compose";
import withChildrenFunction from '../hoc-helpers/with-children-function';

// const withChildrenFunction = fn => Wrapper => {
//   return props => {
//     return <Wrapper {...props}>{fn}</Wrapper>;
//   };
// };
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
compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildrenFunction(renderName)
)(ItemList);

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildrenFunction(renderName)
)(ItemList);

// withSwapiService(mapPersonMethodsToProps)(
//   withData(withChildrenFunction(renderName)(ItemList))
// );

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildrenFunction(renderName)
)(ItemList);
// withSwapiService(mapPlanetMethodsToProps)(
//   withData(withChildrenFunction(renderName)(ItemList))
// );

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildrenFunction(renderModelAndName)
)(ItemList);

// withSwapiService(mapStarshipMethodsToProps)(
//   withData(withChildrenFunction(renderModelAndName)(ItemList))
// );

export { PersonList, PlanetList, StarshipList };

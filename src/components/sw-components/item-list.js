import React from "react";

import { withData } from "../hoc-helpers";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildrenFunction = (Wrapper, fn) => {
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
const PersonList = withData(
  withChildrenFunction(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildrenFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildrenFunction(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };

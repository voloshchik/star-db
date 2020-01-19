import React from "react";

import ItemList from "../item-list";
// import withData from "../item-list/item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const witHChildrenFunction = (Wrapper, fn) => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};
 const withListChilren= witHChildrenFunction()
const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };

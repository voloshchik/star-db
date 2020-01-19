import React from "react";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanet } = swapiService;
const PersonDetails = () => {};

const PlanetDetails = () => {};

const StarshipDetails = () => {};

export { PersonDetails, PlanetDetails, StarshipDetails };

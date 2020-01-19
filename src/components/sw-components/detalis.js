import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;
const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field={"gender"} label={"Gender"} />
      <Record field={"eyeColor"} label={"Eye color"} />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field={"population"} label={"Population"} />
      <Record field={"rotaishionPeriod"} label={"Roteishion Period "} />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field={"model"} label={"Model"} />
      <Record field={"length"} label={"Length"} />
      <Record field={"costInCredits"} label={"Cost"} />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };

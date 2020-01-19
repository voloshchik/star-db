import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";
const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
export default StarshipDetails
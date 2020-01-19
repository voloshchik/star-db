import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
export default PlanetDetails;

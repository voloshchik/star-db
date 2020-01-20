import React from "react";

import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PlanetDetails = (props) => {
  return (
    <ItemDetails
     {...props}
    >
      <Record field={"population"} label={"Population"} />
      <Record field={"rotaishionPeriod"} label={"Roteishion Period "} />
    </ItemDetails>
  );
};
const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(PlanetDetails,mapMethodsToProps);

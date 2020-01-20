import React from "react";

import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field={"gender"} label={"Gender"} />
      <Record field={"eyeColor"} label={"Eye color"} />
    </ItemDetails>
  );
};
const mapMethodsToProps = swapiService => {
  
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};
export default withSwapiService(PersonDetails, mapMethodsToProps);

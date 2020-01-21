import React from "react";

import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";
import compose from "../hoc-helpers/compose";

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
export default compose(withSwapiService(mapMethodsToProps))(PersonDetails);


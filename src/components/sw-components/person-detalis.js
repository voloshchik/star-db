import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = ({ itemId, SwapiService }) => {
  const { getPerson, getPersonImage } = SwapiService;
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
export default withSwapiService(PersonDetails);

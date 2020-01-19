import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";
const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};
export default PersonDetails;

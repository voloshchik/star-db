import React from "react";

import { withRouter } from "react-router-dom";

import { StarshipList } from "../sw-components";

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={itemId => {
        history.push(`/starships/${itemId}`);
      }}
    />
  );
};

export default withRouter(StarshipPage);

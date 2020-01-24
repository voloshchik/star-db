import React  from "react";

import {withRouter} from "react-router-dom";

import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row/row";

const PeoplePage = ({ history, match }) => {
  const onItemSelected = id => {
    history.push(id);
  };

  const { id } = match.params;

  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};
export default withRouter(PeoplePage);

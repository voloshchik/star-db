import React from "react";

import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";


const withSwapiService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {SwapiService => {
          return <Wrapped {...props}  SwapiService={SwapiService}/>;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;

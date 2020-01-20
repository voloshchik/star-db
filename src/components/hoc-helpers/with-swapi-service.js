import React from "react";

import { SwapiServiceConsumer } from "../swapi-sevice-context/swapi-sevice-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  debugger
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;

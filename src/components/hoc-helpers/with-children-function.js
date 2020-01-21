import React from 'react'

const withChildrenFunction = fn => Wrapper => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};
export default withChildrenFunction;

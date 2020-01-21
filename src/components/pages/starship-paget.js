import React, { Component } from "react";
import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row/row";

export class StarshipPage extends Component {
  state = {
    selectedItem: null
  };
  onItemSelected = selectedItem => {
    this.setState({selectedItem});
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}

export default StarshipPage;

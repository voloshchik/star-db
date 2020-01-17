import React, { Component } from "react";

import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";

const Row = ({ left, rigth }) => {
  return (
    <div className="row mb2 PeoplePage ">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{rigth}</div>
    </div>
  );
};
export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        itemRender={({ name, gender, birthYear }) =>
          `${name} ${gender} ${birthYear}`
        }
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return <Row left={itemList} rigth={personDetails} />;
  }
}

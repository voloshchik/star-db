import React, { Component } from "react";

import Row from '../row';
import ErrorBoundary from '../error-boundry/error-boundry';
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import PersonDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";


export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedItem: 3,
    hasError: false
  };

  onPersonSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} ${i.gender} ${i.birthYear}`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundary>
      <PersonDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );
    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />;
      </ErrorBoundary>
    );
  }
}

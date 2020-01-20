import React, { Component } from "react";
import Row from "../row";
import { PersonList } from "../sw-components/item-list";
import PersonDetails from "../item-details";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}

// export default class PeoplePage extends Component {

//     state = {
//       selectedItem: null
//     };

//     onItemSelected = (selectedItem) => {
//       this.setState({ selectedItem });
//     };

//     render() {
//       const { selectedItem } = this.state;

//       return (
//         <Row
//           left={<PersonList onItemSelected={this.onItemSelected} />}
//           right={<PersonDetails itemId={selectedItem} />} />
//       );
//     }

//   }

import React, { Component } from "react";

import "./item-list.css";

import Spinner from "../spinner";

export default class ItemList extends Component {
  // swapiService = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount() {
    debugger
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }
  renderItem(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(+id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const item = this.renderItem(itemList);
    return <ul className="item-list list-group">{item}</ul>;
  }
}

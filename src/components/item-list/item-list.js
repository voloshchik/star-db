import React, { Component } from "react";

import Spinner from "../spinner";

import "./item-list.css";

export default class ItemList extends Component {
  // swapiService = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }
  renderItem(arr) {
    return arr.map(item => {
      const label = this.props.children(item);
      const id = item.id;
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(+id)}
        >
          {label}
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

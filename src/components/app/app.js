import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

class App extends React.Component {
  
state={
  itemSelected:null
}
onItemSelected=(id)=>{
  this.setState({
    itemSelected:id
  })
}
  render() {
    
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails  personId={this.state.itemSelected}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react'
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import './App.css'

class App extends Component {
  state = {
    itemSelected: '',
  }

  handleItemSelected = id => {
    this.setState({ itemSelected: id })
    console.log(id)
  }

  render() {
    return (
      <div className="container-lg">
        <Header />
        <RandomPlanet />

        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.handleItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default App

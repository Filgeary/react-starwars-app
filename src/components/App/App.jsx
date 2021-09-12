import React, { Component } from 'react'
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import './App.css'

// TODO: add Error Boundaries

class App extends Component {
  state = {
    itemSelected: '',
  }

  handleItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state

    return (
      <div className="container-lg">
        <Header />
        <WelcomeScreen />
        <RandomPlanet />

        <div className="row mb-2">
          <div className="col-md-5">
            <ItemList onItemSelected={this.handleItemSelected} />
          </div>
          <div className="col-md-7">
            <PersonDetails itemId={itemSelected} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

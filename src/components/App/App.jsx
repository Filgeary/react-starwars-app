import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import PlanetsPage from '../../pages/PlanetsPage/PlanetsPage'
import StarshipsPage from '../../pages/StarshipsPage/StarshipsPage'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage'
import WelcomeStory from '../WelcomeStory/WelcomeStory'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-lg">
        <Header />

        <Switch>
          <Route path="/" exact>
            <WelcomeMessage />
            <RandomPlanet />
            <WelcomeStory />
          </Route>

          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" component={StarshipsPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

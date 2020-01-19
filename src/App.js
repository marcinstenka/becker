import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Colony from './pages/Colony'
import History from './pages/History.js'
import Offer from './pages/Offer'
import Team from './pages/Team'
import Recomendations from './pages/Recomendations.js'
import Relations from './pages/Relations'
import Contact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Colony} />
        <Route exact path='/historia' component={History} />
        <Route exact path='/oferta' component={Offer} />
        <Route exact path='/zespol' component={Team} />
        <Route exact path='/rekomendacje' component={Recomendations} />
        <Route exact path='/relacje' component={Relations} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

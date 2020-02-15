import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Colony from './pages/Colony'
import History from './pages/History.js'
import Offer from './pages/Offer'
import Team from './pages/Team'
import Recomendations from './pages/Recomendations.js'
import Regulations from './pages/Regulations.js'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
function App() {
  return (
    <BrowserRouter>
      <Switch basename='/becker/'>
        <Route exact path='/' component={Colony} />
        <Route exact path='/historia' component={History} />
        <Route exact path='/oferta' component={Offer} />
        <Route exact path='/zespol' component={Team} />
        <Route exact path='/rekomendacje' component={Recomendations} />
        <Route exact path='/regulamin' component={Regulations} />
        <Route exact path='/blog' component={Regulations} />
        <Route exact path='/kontakt' component={Contact} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

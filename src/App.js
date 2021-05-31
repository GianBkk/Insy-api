import React, { Suspense } from 'react'
import Navbar from './components/Menu/Navbar';
//import HahnData from './HahnData';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import HahnCreate from './components/HahnCreate';
import HahnEdit from "./components/HahnEdit"
const HahnData = React.lazy(() => import('./components/HahnData'))

function App() {
  return (

    <Router>
      <Navbar/>
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={HahnData}/>
            <Route exact path="/create" component={HahnCreate}/>
            <Route path="/edit/:id" component={HahnEdit}/>
          </Switch>
        </Suspense>
      </div>

    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: 'Long walks on the beach'
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: 'Snuggling by the fire'
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: 'Being in charge'
        }
      ]
    }
  }

  handleNewCat = (form) => {
    console.log(form)
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/cats' render={( props ) => <Cats cats={this.state.cats} /> } />
            <Route exact path='/' render={( props ) => <NewCat handleNewCat={this.handleNewCat}/> } />
          </Switch>
        </Router>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import { getFriends } from './api'

import Friends from './pages/Friends'
import NewFriend from './pages/NewFriend'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [
        {
          id: 1,
          name: 'Morris',
          age: 25,
          enjoys: 'Wearing monocles'
        },
        {
          id: 2,
          name: 'Sir ThinksaLot',
          age: 44,
          enjoys: 'Reading by the fire'
        },
        {
          id: 3,
          name: 'Fite Me IRL',
          age: 12,
          enjoys: 'Speech and Debate'
        }
      ]
    }
  }

  componentWillMount = () => {
    getFriends()
      .then(APIfriends => {
        this.setState({
          friends: APIfriends
        })
      })
  }

  handleNewFriend = (form) => {
    console.log(form)
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/friends' render={( props ) => <Friends friends={this.state.friends} /> } />
            <Route exact path='/' render={( props ) => <NewFriend handleNewFriend={this.handleNewFriend}/> } />
          </Switch>
        </Router>
      </div>
    );
  }
}

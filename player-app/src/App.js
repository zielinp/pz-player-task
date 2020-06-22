import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Playlist from './components/Playlist';
import Main from './components/Main';
import More from './components/More';

//import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/"> <Main /></Route>
                    <Route path="/more"> <More /> </Route>
                    <Route path="/playlist"> <Playlist/> </Route>

                </Switch>
            </div>
       </BrowserRouter>
    );
  }
}

export default App;

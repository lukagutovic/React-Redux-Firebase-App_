import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import SearchBar from './YTclone/SearchBar';
import YoutubePage from './components/dashboard/youtubePage';
import RecepieApp from './components/dashboard/recepieApp';
//import {VideoList} from './YTclone/VideoList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/searchbar" component={SearchBar} />
            <Route path="/youtubePage" component={YoutubePage} />
            <Route path="/recepieApp" component={RecepieApp} />
          </Switch>

          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

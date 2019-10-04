import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, Router } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import { Routes } from '../Routes/Routes';
import { RoutesEntitie } from '../../entities/Routes';
import { RoutesItems } from '../../routes/routes'
import history from '../../constants/history'

import './App.css';

interface IAppProps {
  items: RoutesEntitie[],
  addToFavorites: any,
  setNews: any,
  chengeRoute: Function
}

class App extends Component<IAppProps> {

  constructor(props: IAppProps) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div className="Header"><Icon name='handshake outline' className="HeaderIcon" />Friends</div>
        <Container>
          <Router history={history}>
            <div className="MainContainer">
              <Routes
                  items={this.props.items} 
                  chengeRoute={this.props.chengeRoute}/>
                <div className="ContentArea">
                  <Switch>
                    {
                      RoutesItems.map((route: RoutesEntitie) => (
                        <Route 
                          path={route.path} 
                          component={route.component}
                          key={route.path} />))
                    }
                  </Switch>
                </div>
              </div>
            </Router>
        </Container>
      </div>
    );
  }
}

export default App

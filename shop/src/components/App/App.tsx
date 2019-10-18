import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, Router } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as newsActions from '../../actions/news';
import * as routesActions from '../../actions/routes';
import Routes from '../../components/Routes/Routes';
import { RoutesEntitie } from '../../entities/Routes';
import { RoutesItems } from '../../routes/routes'
import Login from '../../components/Login/Login'
import history from '../../constants/history'

import './App.css';
import { tryLogin, logout } from 'components/Login/actions';

interface IAppProps {
  items: RoutesEntitie[],
  addToFavorites: any,
  setNews: any,
  chengeRoute: Function
}

interface IAppState {
}

class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      ...this.state
    })
  }

  render() {
    return (
      <div>
        <div className="HeaderLine"></div>
        <Container>
          <div className="Header">
            <Icon name='handshake outline' className="HeaderIcon" />
            <div className="AppName">Friends</div>
            <Login tryLogin={tryLogin} logout={logout}/>
            </div>
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


const mapStateToProps = () => ({
    items: RoutesItems
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(newsActions, dispatch),
    ...bindActionCreators(routesActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
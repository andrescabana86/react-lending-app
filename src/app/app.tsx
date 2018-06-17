import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
const { Footer } = Layout;

import RequetsList from './containers/requests-list';
import EditRequest from './containers/edit-request';
import Scoring from './containers/scoring';
import ScoringStatus from './containers/scoring-status';
import { HeaderBar } from './components/header-bar';

import './app.css';

export default class App extends React.Component {

  render() {
    return (
      <Layout className="layout__container">

        <HeaderBar {...this.props} />

        <main className="main__container">
          <Switch>
            <Redirect exact from="/" to="/scoring" />
            <Route exact path="/scoring" component={ Scoring } />
            <Route exact path="/scoring/status" component={ ScoringStatus } />
            <Route exact path="/list" component={ RequetsList } />
            <Route exact path="/edit/:id/:nombre/:apellido/:documento" component={ EditRequest } />
          </Switch>
        </main>

        <Footer className="footer__container">
          ©2018 Created by @andrescabana86
        </Footer>

      </Layout>
    );
  }
}

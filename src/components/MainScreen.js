/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component } from 'react';
import {
  Container, Content, StyleProvider
} from 'native-base';
import { connect } from 'react-redux';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';
import { SegmentTab, SegmentTabOptions } from '../Routes';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import { NavigationActions, TabRouter, createNavigationContainer, createNavigator, addNavigationHelpers } from 'react-navigation';
import { ROUTE } from '../actions/Auth';

import WeekPack from '../components/home/WeekPack';

const SegmentTabRouter = TabRouter({

  Custom: {
    getScreen: () => require('../components/home/CustomPack').default,
  },
  Pack: {
    screen: WeekPack,
  }
}, SegmentTabOptions);

class SegmentTabWithMainView extends Component {
  static propTypes = {
    router: React.PropTypes.object,
    navigation: React.PropTypes.object,
  };

  render() {
    const {routes, index} = this.props.navigation.state;
    console.log(routes);
    const ActiveScreen = this.props.router.getComponentForState(this.props.navigation.state);
    const helper = {
      ...this.props.navigation,
      state: routes[index],
    };
    return (
      <Container>
        <AppHeader navigation={this.props.navigation}/>
        <ActiveScreen navigation={addNavigationHelpers(helper)} />
        <AppFooter/>
      </Container>
    )
  }
}

const SegmentTabWithMain = createNavigationContainer(createNavigator(SegmentTabRouter)(SegmentTabWithMainView));

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main Screen',
  };

  static propTypes = {
    navigation: React.PropTypes.object,
    isLoggedIn: React.PropTypes.bool.isRequired,
    toLogin: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      console.debug('not login');
      this.props.navigation.dispatch({type: ROUTE.LOGOUT})
      //this.props.toLogin();
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <SegmentTabWithMain/>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  toLogin: () => {
    console.log('Will to Login Screen ...');
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
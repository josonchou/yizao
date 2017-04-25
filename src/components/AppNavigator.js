/**
 * Created by alixez on 17-4-22.
 */
import React, { PropTypes, Component } from 'react';
import { Platform } from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import routes, { options } from '../Routes';
import { Drawer } from 'native-base';
import { Content, ListItem, Text } from 'native-base';
import { closeDrawer } from '../actions/Drawer';
import SideBar from './sidebar';

export const AppStackNavigator = StackNavigator(routes, options);

class StackNavigatorWithState extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object,
  };

  render() {
    return (
      <AppStackNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav})} />
    )
  }
}
const AppStackNavigatorWithState = connect(state => ({nav: state.nav}))(StackNavigatorWithState);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  };

  componentDidUpdate() {

    switch (this.props.drawerState) {
      case 'opened':
        this.openDrawer();
        break;
      case 'closed':
        this._drawer._root.close();
        break;
    }
  }

  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <Drawer
        ref={ref => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={
          <SideBar/>
        }
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
            backgroundColor: '#ffffff',
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <AppStackNavigatorWithState/>
      </Drawer>
    )
  }
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
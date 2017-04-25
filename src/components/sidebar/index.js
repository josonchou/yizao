/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem } from 'native-base';
import { closeDrawer } from '../../actions/Drawer';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    toOrderManager: React.PropTypes.func,
  };

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={ () => { this.props.toOrderManager(); this.props.closeDrawer();}}>
          <Text>订单管理</Text>
        </ListItem>
      </Content>
    );
  }
}

const mapDispatchProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  toOrderManager: () => dispatch(NavigationActions.navigate({ routeName: 'OrderManager' }))
});


export default connect(null, mapDispatchProps)(SideBar);

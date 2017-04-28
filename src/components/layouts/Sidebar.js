/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem,List } from 'native-base';
import { closeDrawer } from '../../actions/Drawer';
import { NavigationActions } from 'react-navigation';
import styles from './SidebarStyle';

class Sidebar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    toOrderManager: React.PropTypes.func,
    toAddressManager: React.PropTypes.func
  };

  render() {
    return (
      <Content style={styles.container} >
        <List>
          <ListItem button noBorder onPress={ () => { this.props.toOrderManager(); this.props.closeDrawer();}}>
            <Text style={{color: '#ffffff'}}>订单管理</Text>
          </ListItem>
          <ListItem button noBorder onPress={ () => { this.props.toAddressManager(); this.props.closeDrawer();}}>
            <Text style={{color: '#ffffff'}}>地址管理</Text>
          </ListItem>
          <ListItem button noBorder onPress={ () => { this.props.toOrderManager(); this.props.closeDrawer();}}>
            <Text style={{color: '#ffffff'}}>订单管理</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const mapDispatchProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  toOrderManager: () => dispatch(NavigationActions.navigate({ routeName: 'OrderManager' })),
  toAddressManager: () => dispatch(NavigationActions.navigate({ routeName: 'AddressManager' }))
});


export default connect(null, mapDispatchProps)(Sidebar);
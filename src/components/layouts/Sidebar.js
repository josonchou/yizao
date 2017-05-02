/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Content, Text, ListItem, List, Thumbnail, H2, Left, Right, Body, Icon } from 'native-base';
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

        <Image resizeMode="cover" source={require('../../res/images/side_header.png')} style={styles.header}>
          <Thumbnail size={80} source={require('../../res/images/avatar.jpg')} />
          <H2 style={{color: '#202020', marginTop: 10}}>卖火柴的小屁孩</H2>
        </Image>

        <List>
          <ListItem icon button onPress={ () => { this.props.toOrderManager(); this.props.closeDrawer();}}>
            <Left>
              <Icon name="paper" />
            </Left>
            <Body>
              <Text >订单管理</Text>
            </Body>

          </ListItem>
          <ListItem icon button onPress={ () => { this.props.toAddressManager(); this.props.closeDrawer();}}>
            <Left>
              <Icon name="pin" />
            </Left>
            <Body>
              <Text >地址管理</Text>
            </Body>

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
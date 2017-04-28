/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component, PropTypes } from 'react';
import { Header, Left, Body, Segment, Button, Text, Right, Icon} from 'native-base';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/Drawer';

import styles from './HeaderStyle';


class AppHeader extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSegment: 'Custom'
    }
  }

  _handleCustomBtnPress() {
    this.props.navigation.navigate('Custom');
    this.setState({activeSegment: 'Custom'});
  }

  _handlePackBtnPress() {
    this.props.navigation.navigate('Pack');
    this.setState({activeSegment: 'Pack'});
  }

  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <Button transparent onPress={() => {this.props.openDrawer(); console.log('open drawer')}}><Icon name="menu"/></Button>
        </Left>
        <Body>
        <Segment>
          <Button first active={this.state.activeSegment === 'Custom'} style={styles.segmentFirst} onPress={() => this._handleCustomBtnPress()}>
            <Text>自选</Text>
          </Button>
          <Button last active={this.state.activeSegment === 'Pack'} style={styles.segmentLast} onPress={() => this._handlePackBtnPress()}>
            <Text>套餐</Text>
          </Button>
        </Segment>
        </Body>
        <Right/>
      </Header>
    )
  }
}

const mapStateToProp = state => ({

});
const mapDispatchToProp = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(null, mapDispatchToProp)(AppHeader);
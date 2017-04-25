/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component, PropTypes } from 'react';
import { Header, Left, Body, Segment, Button, Text, Right, Icon} from 'native-base';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/Drawer';

const styles = {
  segmentFirst: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 2,
  },
  segmentLast: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderRightWidth: 2,
  }
};

class AppHeader extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
    navigation: PropTypes.object,
  };

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => {this.props.openDrawer(); console.log('open drawer')}}><Icon name="menu"/></Button>
        </Left>
        <Body>
        <Segment>
          <Button first active style={styles.segmentFirst} onPress={() => this.props.navigation.navigate('Custom')}>
            <Text>自选</Text>
          </Button>
          <Button last style={styles.segmentLast} onPress={() => this.props.navigation.navigate('Pack')}>
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
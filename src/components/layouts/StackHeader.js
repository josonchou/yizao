/**
 * Created by alixez on 17-4-24.
 */
import React, { Component, PropTypes } from 'react';
import {Header, Left, Body, Button, Text, Right, Icon} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

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

class StackHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object,
    back: PropTypes.func,
  };

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.back()}><Icon name="arrow-back"/></Button>
        </Left>
        <Body>
          <Text style={{color: '#ffffff'}}>{ this.props.title }</Text>
        </Body>
        <Right/>
      </Header>
    )
  }
}

const mapDispatchProps = dispatch => ({
  back: () => dispatch(NavigationActions.back())
});


export default connect(null, mapDispatchProps)(StackHeader);

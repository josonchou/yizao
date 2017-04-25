/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Dimensions,
  Image,
  View,
} from 'react-native';
import {
  Container, Header, Content, Button, Left, Right, Body, Icon, Text,
  Segment, List, ListItem, Card, CardItem, Footer,
  Col, Grid, StyleProvider, Badge
} from 'native-base';
import getTheme from 'native-base/src/theme/components';
import material from '../../themes/material';
import {Router, Scene} from 'react-native-router-flux';
import CustomPack from './CustomPack';
import WeekPack from './WeekPack';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import {openDrawer} from '../../actions/Drawer';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  leftCol: {
    backgroundColor: '#d954d7',
    height: 200,
    width: deviceWidth * 1 / 3,
  },
  image: {
    width: 15,
    height: 15,
  },
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: '#000000',
    opacity: 1
  }
});

class AppHome extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left><Button transparent onPress={this.props.openDrawer}><Icon name="menu"/></Button></Left>
            <Body>
            <Segment>
              <Button first active={this.props.title === 'custom'} onPress={() => Actions.customPack()}>
                <Text>自选</Text>
              </Button>
              <Button last active={this.props.title === 'week'} onPress={() => Actions.weekPack()}>
                <Text>套餐</Text>
              </Button>
            </Segment>
            </Body>
            <Right/>
          </Header>
          {
            this.props.title === 'custom' ?
              <CustomPack/> :
              <WeekPack/>
          }
          <Footer transparent>
            <Grid transparent>
              <Col style={{width: 55}}>
                <Button transparent full style={{flex: 1, borderRadius: 30}}>
                  <Image source={require('../../res/images/cart.png')} style={{width: 30, height: 30}}>
                    <Badge style={}>
                      <Text>2</Text>
                    </Badge>
                  </Image>
                </Button>
              </Col>
              <Col style={{backgroundColor: '#4b4b4b', flexDirection: 'row'}}>
                <Text style={{flex:1, color: '#ffffff'}}>￥ 5.00 </Text>
              </Col>
              <Col style={{backgroundColor: '#f8b34b', width: deviceWidth * 1 / 4}}>
                <Button transparent full style={{flex: 1}}>
                  <Text style={{color: '#ffffff'}}>提交订单</Text>
                </Button>
              </Col>
            </Grid>
          </Footer>
        </Container>
      </StyleProvider>

    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.User.name,
});

export default connect(mapStateToProps, bindAction)(AppHome);
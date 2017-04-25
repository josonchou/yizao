/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {Container, Content, Item, Input, Button, Icon, View, Text} from 'native-base';
import { ROUTE } from '../../actions/Auth';
import Styles from './Styles';

const background = require('../../res/images/shadow.png');

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Log in',
  };

  static propTypes = {
    navigation: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loginBtnText: '登录',
      account: '',
      password: '',
    }
  }

  _loginToApp = (event) => {
    event && event.preventDefault(); // eslint-disable-line
    this.setState({loginBtnText: '登录...'});
    const {account, password} = this.state;
    setTimeout(() => {
      if (account && password) {
        console.log('start to login');
        this.props.navigation.dispatch({type: ROUTE.LOGIN});
      } else {
        console.log(' Login Error');
      }
    }, 3000);
  };

  render() {
    return (
      <Container>
        <View style={Styles.container}>
          <Content>
            <Image source={background} style={Styles.shadow}>
              <View style={Styles.bg}>

                <Item style={Styles.input}>
                  <Icon active name="person"/>
                  <Input placeholder="邮箱" onChangeText={account => this.setState({account})}/>
                </Item>

                <Item style={Styles.input}>
                  <Icon name="unlock"/>
                  <Input placeholder="密码" secureTextEntry onChangeText={password => this.setState({password})}/>
                </Item>

                <Button style={Styles.btn} onPress={this._loginToApp}>
                  <Text> {this.state.loginBtnText} </Text>
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
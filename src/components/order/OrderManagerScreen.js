/**
 * Created by alixez on 17-4-24.
 */
import React, { Component } from 'react';
import {Container, Content, View, Button, Text} from 'native-base';
import StackHeader from '../layouts/StackHeader';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

export default class OrderManagerScreen extends Component {

  render() {
    return (
      <Container>
        <StackHeader title="订单管理"/>
        <Content padder>
          <Text> 订单管理 </Text>
        </Content>
      </Container>
    )
  }
}


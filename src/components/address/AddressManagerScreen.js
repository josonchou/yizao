/**
 * Created by alixez on 17-4-26.
 */
import React, {Component} from 'react';
import { Container, Content, View, Button, Text } from 'native-base';
import StackHeader from '../layouts/StackHeader';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

export default class AddressManagerScreen extends Component {

  render() {
    return (
      <Container>
        <StackHeader title="地址管理"/>
        <Content padder>
          <Text> 地址管理 </Text>
        </Content>
      </Container>
    )
  }
}
/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Footer, Grid, Col, Button, Text, View } from 'native-base';
import variables from '../../../native-base-theme/variables/platform';

const deviceWidth = Dimensions.get('window').width;
const styles = {
  buttonCart: {
    flex: 1,
    borderRadius: 30,
  },
  buttonCartIcon: {
    width: 20,
    height: 20,
  },

};

export default class AppFooter extends Component {

  render() {
    return (
      <Footer>
        <Grid>
          <Col style={{width: variables.footerHeight}}>
            <Button transparent full style={styles.buttonCart}>
              <Image source={require('../../res/images/cart.png')} style={styles.buttonCartIcon} />
              <Text style={{color: '#ffffff'}}> + 2</Text>
            </Button>
          </Col>
          <Col style={{backgroundColor: '#4b4b4b', flexDirection: 'row'}}>
            <View style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 10}}>
              <Text style={{fontSize: 20,  flex:1, color: '#ffffff'}}>￥ 5.00 </Text>
            </View>
          </Col>
          <Col style={{backgroundColor: '#f8b34b', width: deviceWidth * 1 / 4}}>
            <Button transparent full style={{flex: 1}}>
              <Text style={{color: '#ffffff'}}>提交订单</Text>
            </Button>
          </Col>
        </Grid>
      </Footer>
    )
  }
}
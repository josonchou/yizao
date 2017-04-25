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
import {Text, Grid, Col, Row, CardItem, Card, Right, Icon, List} from 'native-base';
import SideMenu from './SideMenu';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const listData = [
  {
    text: '粥',
    icon: {
      quiet: require('../../res/images/zhou.png'),
      active: require('../../res/images/zhou_active.png'),
    },
    action: () => {
      console.log('on click ... side menu');
    }
  },
  {
    text: '面点',
    icon: {
      quiet: require('../../res/images/miandian.png'),
      active: require('../../res/images/miandian_active.png'),
    }
  },
  {
    text: '糕点',
    icon: {
      quiet: require('../../res/images/gaodian.png'),
      active: require('../../res/images/gaodian_active.png'),
    }
  },
  {
    text: '蛋',
    icon: {
      quiet: require('../../res/images/dan.png'),
      active: require('../../res/images/dan_active.png'),
    }
  },
  {
    text: '油炸',
    icon: {
      quiet: require('../../res/images/youzha.png'),
      active: require('../../res/images/youzha_active.png'),
    }
  },
  {
    text: '粗粮',
    icon: {
      quiet: require('../../res/images/culiang.png'),
      active: require('../../res/images/culiang_active.png'),
    }
  },
  {
    text: '豆制品',
    icon: {
      quiet: require('../../res/images/douzhipin.png'),
      active: require('../../res/images/douzhipin_active.png'),
    }
  }
];
const list = [
  {
    cover: require('../../res/images/81.jpg'),
    title: '红豆八宝粥',
    price: 500,
    sales: 12,
  },

];

export default class CustomPack extends Component {
  render() {
    return (
      <Grid>
        <Col style={{width: deviceWidth * 1/4, marginTop: 10, backgroundColor: '#ffffff'}}>
          <SideMenu data={listData}/>
        </Col>
        <Col style={{backgroundColor: '#e6e6e6'}}>
          <List style={{paddingRight: 10, paddingLeft: 5}} dataArray={list}
                renderRow={(item) =>
                  <Card transparent>
                    <CardItem cardBody>
                      <Image source={item.cover} style={{width: deviceWidth * 3/4, height: 90}}/>
                    </CardItem>
                    <CardItem>

                      <Text>{item.title}</Text>

                      <Right>
                        <Text>月售：{item.sales}</Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Text>￥ {item.price / 100}</Text>
                      <Right>
                        <View style={{flexDirection: 'row'}}>
                          <Icon name="add-circle" style={{color: '#f8b34b', fontSize: 25}} />
                          <Text style={{marginLeft: 5, marginRight: 5, fontSize: 18}}>0</Text>
                          <Icon name="remove-circle" style={{color: '#f8b34b', fontSize: 25}} />
                        </View>
                      </Right>
                    </CardItem>
                  </Card>
                }>
          </List>
        </Col>
      </Grid>
    )
  }
}
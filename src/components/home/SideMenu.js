/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import { List, ListItem, Text, Left, Right } from 'native-base';
import SideMenuItem from './SideMenuItem';

const styles = StyleSheet.create({
  iconImage: {
    width: 15,
    height: 15,
  }
});

export default class SideMenu extends Component {

  static propTypes = {
    data: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    return (
      <List style={{backgroundColor: '#ffffff'}}>
        {
          this.props.data.map((item, i) => {
            const {action, ...itemExceptAction} = item;
            return (<SideMenuItem
              key={i}
              active={this.state.activeIndex === i}
              text={item.text}
              icon={item.icon}
              onPress={() => {
                this.setState({activeIndex: i});
                if (typeof item.action === 'function') {
                  item.action(itemExceptAction);
                }
              }}>

            </SideMenuItem>);
          })
        }
      </List>
    )
  }
}
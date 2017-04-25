/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, {Component} from 'react';
import {ListItem, Left, Right, Text} from 'native-base';
import {StyleSheet, Image} from 'react-native';

const styles = {
  iconImage: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 12,
    color: '#333333',
  },
  listItem: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  activeListItem: {
    paddingLeft: 0,
    marginLeft: 0,
    borderLeftWidth: 2, borderLeftColor: '#f8b34b',
    backgroundColor: '#e6e6e6',
  },
  activeText: {
    fontSize: 12,
    color: '#f8b34b',
  }
};

export default class SideMenuItem extends Component {
  static propTypes = {
    active: React.PropTypes.bool,
    text: React.PropTypes.string,
    icon: React.PropTypes.object,
    onPress: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem noBorder style={this.props.active ? styles.activeListItem : styles.listItem} button onPress={() => this.props.onPress()}>
        <Left>
          <Text style={this.props.active ? styles.activeText : styles.text}>{this.props.text}</Text>
        </Left>

        <Right>
          <Image style={styles.iconImage} source={this.props.active ? this.props.icon.active : this.props.icon.quiet}></Image>
        </Right>

      </ListItem>
    )
  }
}
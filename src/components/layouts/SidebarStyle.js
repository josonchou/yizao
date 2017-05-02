/**
 * Created by alixez on 17-4-27.
 */

import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWeight = Dimensions.get('window').width;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f3f1f0',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    flex: 1,
    padding: 20,
    width: deviceWeight * 0.8,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
  list: {
    '.ListItem': {
      color: '#f3f1f0',
    }
  }
};
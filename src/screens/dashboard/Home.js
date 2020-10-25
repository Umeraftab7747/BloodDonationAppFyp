import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';

// Components
import {NavHeader} from '../../components';

export class Home extends Component {
  state = {};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Primary,
  },
});

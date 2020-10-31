import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

// Components
import {NavHeader} from '../../components';

export class Notification extends Component {
  state = {};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Notifications"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
  },
});

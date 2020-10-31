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

export class Profile extends Component {
  state = {};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Profile"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.TopView}>
          <View style={styles.Cicle}>
            <Image
              style={styles.imgeContainer}
              source={require('../../assets/1.png')}
            />
          </View>
          <View style={styles.TopViewNameID}>
            <Text style={styles.TopText}>Name: Talha</Text>
            <Text style={styles.TopText}>User ID: 0321-123-411-22</Text>
          </View>
        </View>
        <View style={styles.MiddleView}>
          <Text style={styles.MiddleText}>Email: UMERAFTAB888@gmail.com</Text>
          <Text style={styles.MiddleText}>Cnic: 0401-5115-11123-12</Text>
          <Text style={styles.MiddleText}>BloodType: A+</Text>
          <Text style={styles.MiddleText}>Gender: Male</Text>
          <Text style={styles.MiddleText}>Birthday: 29-Feb-2020</Text>
          <Text style={styles.MiddleText}>Ethancity: Asian</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
  },
  TopView: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('33%'),
    alignItems: 'center',
  },
  MiddleView: {
    // backgroundColor: 'gold',
    width: w('100%'),
    height: h('59%'),
    alignItems: 'center',
  },

  Cicle: {
    // backgroundColor: 'tomato',
    width: 150,
    height: 150,
    borderRadius: 1500 / 2,
    marginTop: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  TopViewNameID: {
    // backgroundColor: 'green',
    width: w('100%'),
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'row',
  },
  TopText: {
    color: 'black',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  MiddleText: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    margin: h('2%'),
  },
  imgeContainer: {
    resizeMode: 'contain',
    width: '80%',
    height: '100%',
    // marginBottom: h('5%'),
  },
});

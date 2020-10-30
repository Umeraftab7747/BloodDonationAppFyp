import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

// Components
import {NavHeader} from '../../components';
import CheckBox from '@react-native-community/checkbox';

export class Request extends Component {
  state = {checked: false, checked1: false};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader txt="Request" />
        <View style={styles.SearchBox}>
          <View style={styles.TopBox}>
            <Text style={styles.SearchText}>Search</Text>
          </View>
          <View style={styles.MiddleBox}>
            <View style={styles.SelectBloodType}>
              <Text>Select Blood Type</Text>
            </View>
            <View style={styles.CheckBoxed}>
              {/* checkbox */}
              <TouchableOpacity
                style={styles.CheckedboxStyle}
                onPress={() => {
                  this.setState({checked: !this.state.checked});
                }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() =>
                    this.setState({checked: !this.state.checked})
                  }
                />
                <Text>Emergency</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.CheckedboxStyle}
                onPress={() => {
                  this.setState({checked1: !this.state.checked1});
                }}>
                <CheckBox
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                />
                <Text>Advance</Text>
              </TouchableOpacity>
              {/* end CheckBox */}
            </View>
            <View style={styles.Quantity}>
              <Text>Quantity</Text>
              <TextInput style={styles.QuantityTextField} />
            </View>
          </View>
          <View style={styles.BottomBox}>
            <TouchableOpacity style={styles.SearchButton}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
    alignItems: 'center',
  },
  SearchBox: {
    backgroundColor: 'tomato',
    width: w('90%'),
    height: h('22%'),
    alignItems: 'center',
    marginTop: h('1%'),
    borderRadius: h('1%'),
  },
  SearchText: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  TopBox: {
    backgroundColor: 'red',
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  MiddleBox: {
    backgroundColor: 'gold',
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  BottomBox: {
    backgroundColor: 'green',
    width: '100%',
    height: '30%',
    alignItems: 'center',

    justifyContent: 'center',
  },
  CheckBoxed: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: h('4%'),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  Quantity: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: h('5%'),
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  SelectBloodType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: h('4%'),
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  QuantityTextField: {
    backgroundColor: 'white',
    width: w('30%'),
    color: 'black',
    height: h('4%'),

    paddingTop: -h('4%'),
  },
  SearchButton: {
    backgroundColor: 'white',
    width: w('30%'),
    height: h('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('1%'),
  },
  box: {
    backgroundColor: 'red',
    width: '40%',
    height: h('4%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CheckedboxStyle: {
    // backgroundColor: 'red',
    width: '30%',
    height: h('4%'),
    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

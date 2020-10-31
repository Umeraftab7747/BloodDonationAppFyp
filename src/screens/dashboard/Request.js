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
import {Picker} from '@react-native-picker/picker';

export class Request extends Component {
  state = {checked: false, checked1: false, searched: '', BloodType: 'A+'};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Request"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.SearchBox}>
          <View style={styles.TopBox}>
            <Text style={styles.SearchText}>Search</Text>
          </View>
          <View style={styles.MiddleBox}>
            <View style={styles.SelectBloodType}>
              <Text>Select Blood Type</Text>
              <Picker
                selectedValue={this.state.BloodType}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({BloodType: itemValue})
                }>
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="O-" value="O-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
            <View style={styles.CheckBoxed}>
              {/* checkbox */}
              <TouchableOpacity
                style={styles.CheckBoxContainer}
                onPress={() => {
                  this.setState({checked: !this.state.checked}, () => {
                    this.setState({searched: 'Emergency', checked1: false});
                  });
                }}>
                {this.state.checked ? (
                  <View style={styles.CheckBoxChecked} />
                ) : (
                  <View style={styles.CheckBox} />
                )}
                <Text>Emergency</Text>
              </TouchableOpacity>

              {/* Checkbox 2 */}
              <TouchableOpacity
                style={styles.CheckBoxContainer}
                onPress={() => {
                  this.setState({checked1: !this.state.checked1}, () => {
                    this.setState({searched: 'Advance', checked: false});
                  });
                }}>
                {this.state.checked1 ? (
                  <View style={styles.CheckBoxChecked} />
                ) : (
                  <View style={styles.CheckBox} />
                )}
                <Text>Advance</Text>
              </TouchableOpacity>
              {/* end CheckBox */}
            </View>
            <View style={styles.Quantity}>
              <Text>Quantity</Text>
              <TextInput
                style={styles.QuantityTextField}
                placeholder={'4 packets'}
              />
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
    backgroundColor: Primary,
    width: w('90%'),
    height: h('25%'),
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
    // backgroundColor: 'red',
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  MiddleBox: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  BottomBox: {
    // backgroundColor: 'green',
    width: '100%',
    height: '12%',
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
    width: '20%',
    color: 'black',
    height: '100%',

    paddingTop: -h('1%'),
    paddingBottom: -h('1%'),
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
  CheckBoxContainer: {
    // backgroundColor: 'red',
    width: w('30%'),
    height: h('4%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  CheckBox: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
  },
  CheckBoxChecked: {
    backgroundColor: '#158467',
    width: 20,
    height: 20,
  },
});

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
import DatePicker from 'react-native-datepicker';
import firestore from '@react-native-firebase/firestore';

export class Request extends Component {
  state = {
    checked: false,
    checked1: false,
    searched: '',
    BloodType: 'A+',
    modalVisible: false,
    date: '',
    units: '',
  };
  Notifcation = () => {
    const {BloodType, units, date} = this.state;
    if (BloodType === '' || units === '' || date === '') {
      alert('ALL FIELDS ARE REQUIRED TO MAKE A REQUEST');
    } else {
      firestore()
        .collection('bloodreq')
        .add({
          bloodgroup: BloodType,
          cnic: '1241-41412---12',
          name: 'UMER AFTAB',
          needdate: date,
          status: null,
          timee: new Date(),
          units: units,
        })
        .then(() => {
          console.warn('User added!');
        });
    }
  };
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
        {/* DATA BANK */}
        <View style={styles.BloodData}>
          <View style={styles.left}>
            <Text style={styles.hospitalText}>HOSPITAL</Text>
            <Text style={styles.hospitalnumber}>03040607747</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Text>Heart Button</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end of blood bank */}
        {/* start of modal */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalAlert}>
              <View style={styles.ModalAlerttop}>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Icon
                    name={'close-circle-outline'}
                    type="ionicon"
                    color="#fff"
                    size={35}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.ModalAlertmiddle}>
                <View style={styles.Quantity}>
                  <Text>Quantity</Text>
                  <TextInput
                    style={styles.QuantityTextField}
                    placeholder={'no of packets'}
                    onChangeText={(units) => {
                      this.setState({units});
                    }}
                  />
                </View>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  androidMode={'spinner'}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({date: date});
                    console.warn(this.state.date);
                  }}
                />
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
                <TouchableOpacity
                  onPress={() => {
                    this.Notifcation();
                  }}>
                  <Text>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* End of modal */}
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
    width: '30%',
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
  BloodData: {
    width: w('90%'),
    height: h('20%'),
    backgroundColor: 'red',

    // alignItems: 'center',
    marginTop: h('1%'),
    borderRadius: h('1.1%'),
    flexDirection: 'row',
  },
  left: {
    backgroundColor: 'gold',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  right: {
    backgroundColor: 'orange',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospitalText: {
    color: 'black',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  hospitalnumber: {
    color: 'black',
    fontSize: h('2%'),
  },
  ModalContainer: {
    backgroundColor: '#0004',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalAlert: {
    backgroundColor: 'gold',
    width: w('96%'),
    height: h('40%'),
    borderRadius: h('2%'),
  },
  ModalAlerttop: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '15%',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ModalAlertmiddle: {
    backgroundColor: 'green',
    width: '100%',
    height: '80%',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    // marginTop: -h('5%'),
  },
});

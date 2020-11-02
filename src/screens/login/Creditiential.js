import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';

// Components

import {Textinput, Button} from '../../components';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-datepicker';
import firestore from '@react-native-firebase/firestore';
export class Creditiential extends Component {
  state = {
    BloodType: 'A+',
    Gender: 'Male',
    Ethnicity: 'none',
    Name: '',
    Email: '',
    Cnic: '',
    Phone: '',

    dob: '',
    uid: '',
  };

  componentDidMount = () => {
    const id = this.props.route.params.id;
    this.setState({uid: id});
  };

  Addinfo = () => {
    const {
      Email,
      Cnic,
      Phone,
      dob,
      BloodType,
      Gender,
      Ethnicity,
      Name,
    } = this.state;
    if (
      Email === '' ||
      Cnic === '' ||
      Phone === '' ||
      dob === '' ||
      BloodType === '' ||
      Gender === '' ||
      Ethnicity === '' ||
      Name === ''
    ) {
      alert('ALL FIELDS ARE REQUIRED');
    } else {
      firestore()
        .collection('clientsdata')
        .doc(this.state.uid)
        .set({
          bloodgroup: BloodType,
          cnic: Cnic,
          contact: Phone,
          dob: dob,
          email: Email,
          ethnicity: Ethnicity,
          gender: Gender,
          name: Name,
          password: '1234567899',
        })
        .then(() => {
          console.warn('User added!');
          this.props.navigation.navigate('DrawerNavigator');
        });
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.Container}>
          <Text style={styles.CompleteApp}>
            COMPLETE THE DETAILS TO START USING APP
          </Text>
          <Textinput
            name={'person'}
            placeholder={'Name'}
            onChangeText={(Name) => {
              this.setState({Name});
            }}
          />
          <Textinput
            name={'mail'}
            placeholder={'Email'}
            onChangeText={(Email) => {
              this.setState({Email});
            }}
          />
          <Textinput
            name={'card'}
            placeholder={'Cnic'}
            onChangeText={(Cnic) => {
              this.setState({Cnic});
            }}
          />
          <Textinput
            name={'phone-portrait'}
            placeholder={'Phone'}
            keyboardType={'numeric'}
            onChangeText={(Phone) => {
              this.setState({Phone});
            }}
          />

          {/* DROPDOWN s */}
          <View style={styles.SelectBloodType}>
            <Text>Gender</Text>
            <Picker
              selectedValue={this.state.Gender}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({Gender: itemValue})
              }>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          {/* DROPDOWN n */}

          {/* DROPDOWN s */}
          <View style={styles.SelectBloodType}>
            <Text>Blood Type</Text>
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
          {/* DROPDOWN n */}
          {/* DROPDOWN s */}
          <View style={styles.SelectBloodType}>
            <Text>Select Ethnicity</Text>
            <Picker
              selectedValue={this.state.Ethnicity}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({Ethnicity: itemValue})
              }>
              <Picker.Item label="American Indian" value="American Indian" />
              <Picker.Item label="Alaska Native" value="Alaska Native" />
              <Picker.Item label="Asian" value="Asian" />
              <Picker.Item
                label="Black African American"
                value="Black African American"
              />
              <Picker.Item label="Native Hawaiian" value="Native Hawaiian" />
              <Picker.Item label="White" value="White" />
            </Picker>
          </View>
          {/* DROPDOWN n */}

          <View>
            {/* datepicker */}
            <DatePicker
              style={{width: 200}}
              date={this.state.dob}
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
                this.setState({dob: date});
                console.warn(this.state.dob);
              }}
            />
          </View>

          <Button
            Text={'Add info'}
            TopMargin={{marginTop: h('2%')}}
            onPress={() => {
              this.Addinfo();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
    alignItems: 'center',
  },
  SelectBloodType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: h('7%'),
    // backgroundColor: 'orange',
    alignItems: 'center',
    marginTop: h('1%'),
    // marginBottom: h('1%'),
  },
  CompleteApp: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: h('2.3%'),
    marginTop: h('2%'),
    marginBottom: h('5%'),
  },
  container2: {
    width: w('30%'),
    height: h('7%'),
    backgroundColor: Primary,
    borderRadius: h('1%'),
    marginTop: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
});

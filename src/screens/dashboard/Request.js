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
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Request extends Component {
  state = {
    Hospitals: [
      {
        name: 'Agha Khan Hospital',
        number: '+9221111911911',
        address:
          'National Stadium Rd, Aga Khan University Hospital, Karachi, Sindh, Pakistan',
        key: '1',
      },
      {
        name: 'Fatmid Foundation',
        number: '+922132225284',
        address: 'Garden East Karachi, Sindh, Pakistan',
        key: '2',
      },
      {
        name: 'Hussaini Blood Bank ',
        number: '+923332569795 ',
        address:
          'Plot# ST02,Block T,Qalandaria Chowk,opposite Talib Chaman Park,Block J North Nazimabad Town,Karachi,Sindh,Pakistan',
        key: '3',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+922134834782',
        address:
          'Shan Hospital, Block 5 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '4',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998308',
        address:
          'Lady Dufferin Hospital, Chand Bibi Rd, Adhumal Oodharam Quarter, Karachi, Sindh, Pakistan',
        key: '5',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998302',
        address:
          'Plot# SB59, Block K North Nazimabad Town, Karachi, Sindh, Pakistan',
        key: '6',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998321',
        address:
          'South City Hospital, 12 Rojhan St, Block 5 Block 3 Clifton, Karachi, Sindh, Pakistan',
        key: '7',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+922136353125',
        address:
          'Afsar Memorial Hospital Gulshan-I-Maymar Rd, Sector W, Karachi, Sindh, Pakistan',
        key: '8',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998320',
        address:
          '22-23 Shaheed-e-Millat Road,Bihar Muslim Society Modern Society BMCHS Sharfabad, Karachi, Sindh, Pakistan',
        key: '9',
      },
      {
        name: 'Saylani Welfare Blood Bank',
        number: '+922134990413',
        address:
          'Plot# 3/A-5, Block 4 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '10',
      },
      {
        name: 'Liaquat National Hospital',
        number: '9221111456456',
        address:
          'National stadium Rd, Liaquat National Hospital, Karachi, Sindh, Pakistan',
        key: '11',
      },
      {
        name: 'Indus Hospital',
        number: '+922135112710',
        address: 'Mehran Town Sector 24 Korangi, Karachi, Sindh, Pakistan',
        key: '12',
      },
      {
        name: 'Burhani Blood Bank',
        number: '+922136644490',
        address:
          'Saifee Rd, Block F North Nazimabad Town, Karachi, Sindh, Pakistan',
        key: '13',
      },
      {
        name: 'NIBD Blood Bank',
        number: '+922134821502',
        address: 'National Stadium Colony, Karachi, Sindh, Pakistan',
        key: '14',
      },
      {
        name: 'Emergency Blood Bank',
        number: '+923332185621',
        address: 'Faisal Cantonment, Karachi, Sindh, Pakistan',
        key: '15',
      },
      {
        name: 'DOW Blood Bank',
        number: '+922199232660',
        address: 'Gulzar-e-Hijri Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '16',
      },
      {
        name: 'Sahara Blood Bank',
        number: 'NA',
        address: 'M.A Jinnah Rd, Jamshed Quarters Karachi, Sindh, Pakistan',
        key: '17',
      },
      {
        name: 'PWA Blood Bank',
        number: '+922132735214',
        address: 'New Labour Colony Nanakwara, Karachi, Sindh, Pakistan',
        key: '18',
      },
      {
        name: 'Muhammadi Blood Bank',
        number: '+923162946498',
        address:
          '280 Britto Rd, Soldier Bazaar Catholic Colony, Karachi, Sindh, Pakistan',
        key: '19',
      },
    ],
    checked: false,
    checked1: false,
    searched: '',
    BloodType: 'A+',
    modalVisible: false,
    date: '',
    units: '',
    userid: '',
    data: [],
  };
  // start

  componentDidMount = async () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          userid: userData.id,
        });
        this.userinfo();
      } else {
        console.warn('No data found');
      }
    });
  };

  userinfo = async () => {
    const user = await firestore()
      .collection('clientsdata')
      .doc(this.state.userid)
      .get();
    this.setState({data: user.data()});
  };

  // end

  Notifcation = () => {
    const {BloodType, units, date} = this.state;
    if (BloodType === '' || units === '' || date === '') {
      alert('ALL FIELDS ARE REQUIRED TO MAKE A REQUEST');
    } else {
      firestore()
        .collection('bloodreq')
        .add({
          bloodgroup: BloodType,
          cnic: this.state.data.cnic,
          name: this.state.data.name,
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

  renderitem = (item) => (
    <>
      {this.state.searched === '' ? null : (
        <View style={styles.BloodData}>
          <View style={styles.left}>
            <Text style={styles.hospitalText}>{item.name}</Text>
            <Text style={styles.hospitalnumber}>{item.number}</Text>
            <Text style={styles.hospitaladdress}>{item.address}</Text>
          </View>

          <View style={styles.right}>
            {this.state.searched === 'Advance' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Icon name={'heart'} type="ionicon" color={'#ffff'} size={35} />
              </TouchableOpacity>
            ) : null}

            {this.state.searched === 'Emergency' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Icon
                  name={'arrow-forward-circle'}
                  type="ionicon"
                  color={'#ffff'}
                  size={35}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      )}
    </>
  );

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
                onChangeText={(units) => {
                  this.setState({units});
                }}
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

        <FlatList
          data={this.state.Hospitals}
          renderItem={({item}) => this.renderitem(item)}
          keyExtractor={(item) => item.key}
        />

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
                    color={Primary}
                    size={35}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.ModalAlertmiddle}>
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
                  }}
                  onDateChange={(date) => {
                    this.setState({date: date});
                    console.warn(this.state.date);
                  }}
                />

                <TouchableOpacity
                  style={styles.RequestButton}
                  onPress={() => {
                    this.Notifcation();
                  }}>
                  <Text style={styles.RequestText}>Request</Text>
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
    backgroundColor: Primary,

    // alignItems: 'center',
    marginTop: h('1%'),
    borderRadius: h('1.1%'),
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'gold',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
  },

  right: {
    // backgroundColor: 'orange',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospitalText: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  hospitalnumber: {
    color: 'white',
    fontSize: h('2%'),
  },
  ModalContainer: {
    backgroundColor: '#0004',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalAlert: {
    backgroundColor: 'white',
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
    // backgroundColor: 'green',
    width: '100%',
    height: '80%',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    // marginTop: -h('5%'),
  },
  hospitaladdress: {
    color: '#fff9',
    fontSize: h('1.8%'),
  },
  RequestButton: {
    backgroundColor: Primary,
    width: '30%',
    height: h('6%'),
    borderRadius: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('6%'),
  },
  RequestText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});

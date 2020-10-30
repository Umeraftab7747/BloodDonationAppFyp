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

export class Home extends Component {
  state = {
    data: [
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
        name: 'Hussaini Blood Bank Head Office',
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
    modalVisible: false,
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader txt="Home" />

        {/* FlatList */}

        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.members}>
              <Text
                style={[
                  styles.membersText,
                  {fontSize: 20, fontWeight: 'bold'},
                ]}>
                {item.name}
              </Text>
              <Text style={[styles.membersText, {alignSelf: 'center'}]}>
                {item.address}
              </Text>
              <Text style={styles.membersText}>{item.number}</Text>
            </View>
          )}
        />

        {/* Modal */}
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
                    color="#000"
                    size={35}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ModalAlertmiddle}>
                <Text style={styles.ModalText}>
                  The purpose of ProBlood is connectivity. Therefore, ProBlood
                  will not be responsible for the quality of blood
                  products.ProBlood is not to be held responsible if user has
                  entered incorrect info during sign up.ProBlood recommends that
                  all advance blood bookings be made 24 hours prior the
                  requirement. For urgent cases, use search feature to find
                  blood product at nearest blood bank.
                </Text>
              </View>
              <View style={styles.ModalAlertbottom}>{/* EMPTY */}</View>
            </View>
          </View>
        </Modal>
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
  ModalContainer: {
    backgroundColor: '#0004',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalAlert: {
    backgroundColor: '#fff',
    width: w('96%'),
    height: h('40%'),
    borderRadius: h('2%'),
  },
  ModalAlerttop: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '20%',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ModalAlertmiddle: {
    backgroundColor: 'gold',
    width: '100%',
    height: '60%',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
  },
  ModalAlertbottom: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '20%',
  },
  ModalText: {
    color: 'white',
    fontSize: h('2.3%'),
  },
  members: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    marginTop: h('2%'),
    backgroundColor: Primary,
    width: w('90%'),
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginBottom: h('0.6%'),
  },
  membersText: {
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    //width:'75%'
    //color:'#fff'
  },
});

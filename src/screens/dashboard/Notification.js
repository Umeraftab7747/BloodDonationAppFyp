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
import firestore from '@react-native-firebase/firestore';

// Components
import {NavHeader} from '../../components';

export class Notification extends Component {
  state = {data: []};
  componentDidMount = () => {
    this.dataFetch();
  };
  dataFetch = async () => {
    let DataArray = [];
    firestore()
      .collection('notifications')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          // DataArray.push(documentSnapshot);
          DataArray.push(documentSnapshot.data());
          console.log(DataArray);
          this.setState({data: DataArray});
          // this.setState({data: documentSnapshot});
          // console.log(this.state.data.id);
          // console.log(this.state.data.data().requestername);
        });
      });
  };

  renderItem = (item) => (
    <View style={styles.FlatListView}>
      <View style={styles.leftFlat}>
        <Text>Request: {item.requestedblood}</Text>
        <Text>Units: {item.requestedunits}</Text>
      </View>
      <View style={styles.RightFlat}>
        <Text>Hospital {item.content}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Notifications"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.FlatListContianer}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item) => item.id}
          />
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
  FlatListContianer: {
    // backgroundColor: 'red',
    width: '90%',
    height: h('90%'),
    alignItems: 'center',
  },
  FlatListView: {
    backgroundColor: 'gold',
    width: w('90%'),
    height: h('10%'),
    margin: h('1%'),
    flexDirection: 'row',
  },
  leftFlat: {
    // backgroundColor: 'red',
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightFlat: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

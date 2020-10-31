/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Primary} from '../color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.name}>
          <View style={styles.leftr}>
            <Text style={styles.ntxt}>Name: Umer Aftab</Text>
            <Text style={styles.dtxt}>UserID: 0841-1512-11</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Edit Profile');
          }}
          style={[styles.ItemView, {marginTop: h('1%')}]}>
          <View style={styles.iconContainer}>
            <Icon
              name={'person'}
              type={'ionicon'}
              color={Primary}
              size={h('4%')}
            />
          </View>

          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemView}>
          <View style={styles.iconContainer}>
            <Icon
              name={'notifications'}
              type={'ionicon'}
              color={Primary}
              size={h('4%')}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Notification</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemView}>
          <View style={styles.iconContainer}>
            <Icon
              name={'file-tray-full'}
              type={'ionicon'}
              color={Primary}
              size={h('4%')}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Records</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemView}>
          <View style={styles.iconContainer}>
            <Icon
              name={'information-circle'}
              type={'ionicon'}
              color={Primary}
              size={h('4%')}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>About us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ItemView,
            {
              marginTop: h('38.3%'),
              //   borderWidth: h('0.05'),
            },
          ]}>
          <Text
            style={[styles.txt, {marginRight: h('5%'), fontWeight: 'bold'}]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: h('0.05%'),
    borderColor: Primary,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  txt: {
    fontSize: h('2.5%'),
    marginLeft: h('5%'),
    color: Primary,
  },
  name: {
    height: h('18%'),

    borderBottomWidth: h('0.05%'),
    backgroundColor: Primary,
    flexDirection: 'row',
  },
  ntxt: {
    fontSize: h('3%'),
    color: '#fff',
    marginTop: h('6%'),
    marginRight: h('12%'),
    fontWeight: 'bold',
  },
  leftc: {
    backgroundColor: 'yellow',
    width: h('20%'),
    height: h('18%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftr: {
    width: h('41%'),
    height: h('18%'),
    alignItems: 'center',
  },
  dtxt: {fontSize: h('2%'), color: '#fff7', marginLeft: -h('17%')},
  img: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: h('10%'),
  },
  imgC: {
    backgroundColor: 'white',
    width: '60%',
    height: '66%',
    borderRadius: h('20%'),
  },
  txtContainer: {
    // backgroundColor: 'green',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});

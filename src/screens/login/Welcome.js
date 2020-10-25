import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';

// Components
import {Textinput, Button} from '../../components';

export class Welcome extends Component {
  state = {
    logoAnimation: new Animated.Value(0),
    lowerContainerAnimation: new Animated.Value(0),
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.startAnimation();
    }, 10);
  };

  startAnimation = () => {
    Animated.timing(this.state.logoAnimation, {
      toValue: -220,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: -440,
      duration: 900,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const AnimatedStyle = {
      transform: [
        {
          translateY: this.state.logoAnimation,
        },
      ],
    };
    const AnimatedStyle2 = {
      transform: [
        {
          translateY: this.state.lowerContainerAnimation,
        },
      ],
    };

    return (
      <View style={styles.Container}>
        <Animated.View style={[styles.TopContainer, AnimatedStyle]}>
          <Image
            style={styles.LogoContainer}
            source={require('../../assets/LogoA.png')}
          />
        </Animated.View>
        <Animated.View style={[styles.LowerCotnainer, AnimatedStyle2]}>
          <View style={styles.LowerContainerTextInput}>
            <Textinput name={'mail-outline'} placeholder={'Email'} />
            <Textinput name={'lock-closed-outline'} placeholder={'Password'} />
            <TouchableOpacity style={styles.ForgotPass}>
              <Text style={styles.ForgotPassText}>FORGOT PASSWORD !</Text>
            </TouchableOpacity>
          </View>
          <Button Text={'Login'} TopMargin={{marginTop: h('5%')}} />
          <Text style={styles.or}>OR</Text>
          <Button Text={'Enter as Guest'} />

          <View style={styles.SignUp}>
            <View style={styles.leftSignup}>
              <Text style={styles.SignupText}>DONT HAVE A ACCOUNT!</Text>
            </View>
            <TouchableOpacity style={styles.rightSignup}>
              <Text style={styles.SignupText2}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Primary,
  },
  TopContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('30%'),
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('33%'),
  },
  LogoContainer: {
    width: '80%',
    height: h('30%'),
    resizeMode: 'contain',
    // backgroundColor: 'gold',
  },
  LowerCotnainer: {
    backgroundColor: 'white',
    width: '100%',
    height: h('60%'),

    alignItems: 'center',
    borderTopRightRadius: h('8%'),
    borderTopLeftRadius: h('8%'),
    marginTop: h('39%'),
  },
  LowerContainerTextInput: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('20%'),
    alignItems: 'center',
    marginTop: h('3%'),
  },
  ForgotPass: {
    width: '100%',
    height: h('5%'),
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: h('29%'),
  },
  ForgotPassText: {
    color: '#05375a',
  },
  or: {
    margin: h('1%'),
    fontSize: h('2%'),
    color: '#05375a',
  },
  SignUp: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: h('4%'),
  },
  leftSignup: {
    // backgroundColor: 'green',
    width: '40%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  rightSignup: {
    // backgroundColor: 'gold',
    width: '13%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignupText: {
    color: 'black',
    fontSize: h('2%'),
  },
  SignupText2: {
    color: '#05375a',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});

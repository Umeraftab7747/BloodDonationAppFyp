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
    Signup: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.startAnimation();
    }, 3500);
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

  Signup = () => {
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 440,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      this.setState({Signup: true}),
        Animated.timing(this.state.lowerContainerAnimation, {
          toValue: -440,
          duration: 500,
          useNativeDriver: false,
        }).start();
    }, 600);
  };

  Signin = () => {
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 440,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      this.setState({Signup: false}),
        Animated.timing(this.state.lowerContainerAnimation, {
          toValue: -440,
          duration: 500,
          useNativeDriver: false,
        }).start();
    }, 600);
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
          {this.state.Signup === false ? (
            <>
              <View style={styles.LowerContainerTextInput}>
                <Textinput name={'mail'} placeholder={'Email'} />
                <Textinput name={'lock-closed'} placeholder={'Password'} />
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
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => this.Signup()}
                  style={styles.rightSignup}>
                  <Text style={styles.SignupText2}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Textinput name={'person'} placeholder={'Name'} />
              <Textinput name={'mail'} placeholder={'Email'} />
              <Textinput
                name={'phone-portrait'}
                placeholder={'Phone'}
                keyboardType={'numeric'}
              />
              <Textinput name={'lock-closed'} placeholder={'Password'} />
              <Textinput
                name={'lock-closed'}
                placeholder={'Confirm Password'}
              />
              <Button Text={'Login'} TopMargin={{marginTop: h('2%')}} />

              <View style={styles.SignUp}>
                <View style={styles.leftSignup}>
                  <Text style={styles.SignupText}>Already HAVE A ACCOUNT!</Text>
                </View>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => this.Signin()}
                  style={styles.rightSignup}>
                  <Text style={styles.SignupText2}>SignIn</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
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
    marginTop: h('2%'),
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

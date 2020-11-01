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
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

export class Welcome extends Component {
  state = {
    logoAnimation: new Animated.Value(0),
    lowerContainerAnimation: new Animated.Value(0),
    opacity: new Animated.Value(1),
    signupOpacity: new Animated.Value(0),
    Signup: false,
    BloodType: 'A+',
    Gender: 'Male',
    Ethnicity: 'none',
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.startAnimation();
    }, 100);
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
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 440,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      this.setState({Signup: true}),
        Animated.timing(this.state.lowerContainerAnimation, {
          toValue: -650,
          duration: 500,
          useNativeDriver: false,
        }).start();
      Animated.timing(this.state.signupOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }, 600);
  };

  Signin = () => {
    Animated.timing(this.state.signupOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 440,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400,
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
    const OpactiyStyle = {
      opacity: this.state.opacity,
    };
    const SignUpOpactiyStyle = {
      opacity: this.state.signupOpacity,
    };
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
      <KeyboardAwareScrollView>
        <View style={styles.Container}>
          <Animated.View
            style={[styles.TopContainer, AnimatedStyle, OpactiyStyle]}>
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
                {/* signup */}
                <Animated.View style={[styles.SignupLogo, SignUpOpactiyStyle]}>
                  <Text style={styles.SingupLogoText}>
                    Signup With ProBlood
                  </Text>
                </Animated.View>
                <Textinput name={'person'} placeholder={'Name'} />
                <Textinput name={'mail'} placeholder={'Email'} />
                <Textinput name={'card'} placeholder={'Cnic'} />
                <Textinput
                  name={'phone-portrait'}
                  placeholder={'Phone'}
                  keyboardType={'numeric'}
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
                    <Picker.Item
                      label="American Indian"
                      value="American Indian"
                    />
                    <Picker.Item label="Alaska Native" value="Alaska Native" />
                    <Picker.Item label="Asian" value="Asian" />
                    <Picker.Item
                      label="Black African American"
                      value="Black African American"
                    />
                    <Picker.Item
                      label="Native Hawaiian"
                      value="Native Hawaiian"
                    />
                    <Picker.Item label="White" value="White" />
                  </Picker>
                </View>
                {/* DROPDOWN n */}
                <Textinput name={'lock-closed'} placeholder={'Password'} />
                <Textinput
                  name={'lock-closed'}
                  placeholder={'Confirm Password'}
                />
                <Button Text={'Signup'} TopMargin={{marginTop: h('2%')}} />

                <View style={styles.SignUp}>
                  <View style={styles.leftSignup}>
                    <Text style={styles.SignupText}>
                      Already HAVE A ACCOUNT!
                    </Text>
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
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    height: h('120%'),
    width: w('100%'),
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
    height: h('120%'),

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
  SignupLogo: {
    marginTop: -h('8%'),
    marginBottom: h('1%'),
    width: '100%',
    height: '10%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SingupLogoText: {
    color: 'white',
    fontSize: h('4%'),
    fontWeight: 'bold',
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
});

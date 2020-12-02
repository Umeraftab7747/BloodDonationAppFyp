import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { w, h } from "react-native-responsiveness";

// Components
import { NavHeader } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";

export class Profile extends Component {
  state = { userid: "", data: [] };
  componentDidMount = async () => {
    AsyncStorage.getItem("userData", (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          userid: userData.id,
        });
        this.userinfo();
      } else {
        console.warn("No data found");
      }
    });
  };

  userinfo = async () => {
    const user = await firestore()
      .collection("clientsdata")
      .doc(this.state.userid)
      .get();
    this.setState({ data: user.data() });
  };
  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="Profile"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.TopView}>
          <View style={styles.Cicle}>
            <Image
              style={styles.imgeContainer}
              source={require("../../assets/1.png")}
            />
          </View>
          <View style={styles.TopViewNameID}>
            <Text style={styles.TopText}>Name: {this.state.data.name}</Text>
            <Text style={styles.TopText}>User ID: {this.state.data.cnic}</Text>
          </View>
        </View>
        <View style={styles.MiddleView}>
          <Text style={styles.MiddleText}>Email: {this.state.data.email}</Text>
          <Text style={styles.MiddleText}>Cnic:{this.state.data.cnic}</Text>
          <Text style={styles.MiddleText}>
            BloodType: {this.state.data.bloodgroup}
          </Text>
          <Text style={styles.MiddleText}>
            Gender: {this.state.data.gender}
          </Text>
          <Text style={styles.MiddleText}>Birthday: {this.state.data.dob}</Text>
          <Text style={styles.MiddleText}>
            Ethancity: {this.state.data.ethnicity}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
  },
  TopView: {
    // backgroundColor: 'red',
    width: w("100%"),
    height: h("33%"),
    alignItems: "center",
  },
  MiddleView: {
    // backgroundColor: 'gold',
    width: w("100%"),
    height: h("59%"),
    alignItems: "center",
  },

  Cicle: {
    // backgroundColor: 'tomato',
    width: 150,
    height: 150,
    borderRadius: 1500 / 2,
    marginTop: h("1%"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  TopViewNameID: {
    // backgroundColor: 'green',
    width: w("100%"),
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
    // flexDirection: 'row',
  },
  TopText: {
    color: "black",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
  MiddleText: {
    fontSize: h("2.5%"),
    fontWeight: "bold",
    margin: h("2%"),
  },
  imgeContainer: {
    resizeMode: "contain",
    width: "80%",
    height: "100%",
    // marginBottom: h('5%'),
  },
});

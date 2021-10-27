import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  Input,
  Icon,
  Stack,
  Center,
  NativeBaseProvider,
  Checkbox,
  Button,
  Box,
  HStack,
  VStack,
} from "native-base";
import TypeWriter from "react-native-typewriter";

const WelcomeScreen = ({ navigation, route }) => {
  const startOrder = () => {
    navigation.navigate("CustomerSelection");
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../assets/images/apptheme.png")}
        style={{ height: Dimensions.get("window").height }}
      >
        <View style={styles.brandView}>
          <FontAwesome5 name="clinic-medical" size={44} color="white" />
          <Text style={styles.brandViewText}>Sample Order</Text>
        </View>
        <View style={styles.welcomeView}>
          <View style={{ padding: 20 }}>
            <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
              {/* <TypeWriter typing={1} minDelay={50}> */}
              Welcome {route.params.name}
              {/*  </TypeWriter> */}
            </Text>

            <View
              style={{
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Center flex={1} px="3">
                <Button
                  size="lg"
                  style={styles.loginButton}
                  onPress={startOrder}
                >
                  <Text
                    style={{
                      color: "#03a3e1",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Start Order
                  </Text>
                </Button>
              </Center>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Omega, Embassy TechSquare,</Text>
          <Text style={styles.bottomText}>Kadubeesanahalli, Bengaluru,</Text>
          <Text style={styles.bottomText}>Karnataka 560103</Text>
          <Text style={styles.bottomText}>Visit us: www.sampleorder.com</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  brandViewText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  welcomeView: {
    flex: 0.4,
    //backgroundColor: "white",
    color: "white",
    bottom: 200,
    //borderTopStartRadius: 30,
    //borderTopEndRadius: 30,
    //borderBottomStartRadius: 30,
    //borderBottomEndRadius: 30,
  },
  bottomView: {
    flex: 0.4,
    color: "white",
    bottom: 10,
  },
  bottomText: {
    padding: 5,
    color: "#03a3e1",
    textAlign: "center",
    fontSize: 15,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  loginButton: {
    alignSelf: "center",
    backgroundColor: "white",
    color: "#6d07f2",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
